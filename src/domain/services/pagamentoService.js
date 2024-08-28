// src/domain/services/pagamento.service.js
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pagamento } from '../entities/pagamentoEntity';

@Injectable()
@Dependencies(getRepositoryToken(Pagamento))
export class PagamentoService {
    #pagamentoRepository;
    constructor(pagamentoRepository) {
        this.#pagamentoRepository = pagamentoRepository;
    }

    async getPagamento(codigo) {
        const resposta = await this.#pagamentoRepository.findOneBy({codigo})
        return resposta;
    }

    async getAllPagamentos() {
        const resposta = await this.#pagamentoRepository.find()
        return resposta;
    }

    async createPagamento(pagamento) {
        return await this.#pagamentoRepository.save(pagamento);
    }

    async deletePagamento(codigo) {
        const result = await this.#pagamentoRepository.delete({ codigo });
        if (result.affected === 0) {
            throw new Error(`Pagamento com código ${codigo} não encontrado`);
        }
        return { message: `Pagamento com código ${codigo} removido com sucesso` };
    }

    async atualizaPagamento(codigo, pagamentoAtualizado) {
        const pagamentoExistente = await this.#pagamentoRepository.findOneBy({ codigo });
        if (!pagamentoExistente) {
            throw new Error(`Pagamento com ID ${codigo} não encontrado`);
        }

        const pagamentoParaAtualizar = this.#pagamentoRepository.merge(pagamentoExistente, pagamentoAtualizado);
        return await this.#pagamentoRepository.save(pagamentoParaAtualizar);
    }
}
