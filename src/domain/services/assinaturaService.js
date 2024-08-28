// src/domain/services/assinatura.service.js
import { Injectable, Dependencies } from '@nestjs/common';
import { Assinatura } from '../entities/assinaturaEntity';
import { getRepositoryToken } from '@nestjs/typeorm';

@Injectable()
@Dependencies(getRepositoryToken(Assinatura))
export class AssinaturaService {
    #assinaturaRepository;
    constructor(assinaturaRepository) {
        this.#assinaturaRepository = assinaturaRepository;
    }

    async getAssinatura(codigo) {
        const resposta = await this.#assinaturaRepository.findOneBy({ codigo });
        return resposta;
    }

    async getAllAssinaturas() {
        const resposta = await this.#assinaturaRepository.find()
        return resposta;
    }

    async createAssinatura(assinatura) {
        return await this.#assinaturaRepository.save(assinatura);
    }

    async deleteAssinatura(codigo) {
        const result = await this.#assinaturaRepository.delete({ codigo });
        if (result.affected === 0) {
            throw new Error(`Assinatura com código ${codigo} não encontrado`);
        }
        return { message: `Assinatura com código ${codigo} removido com sucesso` };
    }

    async atualizaAssinatura(codigo, assinaturaAtualizada) {
        const assinaturaExistente = await this.#assinaturaRepository.findOneBy({ codigo });
        if (!assinaturaExistente) {
            throw new Error(`Assinatura com ID ${codigo} não encontrado`);
        }

        const assinaturaParaAtualizar = this.#assinaturaRepository.merge(assinaturaExistente, assinaturaAtualizada);
        return await this.#assinaturaRepository.save(assinaturaParaAtualizar);
    }

}

