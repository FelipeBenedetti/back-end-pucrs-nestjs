// src/domain/services/aplicativo.service.js
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Aplicativo } from '../entities/aplicativoEntity';

@Injectable()
@Dependencies(getRepositoryToken(Aplicativo))
export class AplicativoService {
    #aplicativoRepository;
    constructor(aplicativoRepository) {
        this.#aplicativoRepository = aplicativoRepository;
    }

    async getAplicativo(codigo) {
        const resposta = await this.#aplicativoRepository.findOneBy({ codigo })
        return resposta;
    }

    async getAllAplicativos() {
        const resposta = await this.#aplicativoRepository.find()
        return resposta;
    }

    async createAplicativo(aplicativo) {
        return await this.#aplicativoRepository.save(aplicativo);
    }

    async deleteAplicativo(codigo) {
        const result = await this.#aplicativoRepository.delete({ codigo });
        if (result.affected === 0) {
            throw new Error(`Aplicativo com código ${codigo} não encontrado`);
        }
        return { message: `Aplicativo com código ${codigo} removido com sucesso` };
    }

    async atualizaAplicativo(codigo, aplicativoAtualizado) {
        const aplicativoExistente = await this.#aplicativoRepository.findOneBy({ codigo });
        if (!aplicativoExistente) {
            throw new Error(`Aplicativo com ID ${codigo} não encontrado`);
        }

        const aplicativoParaAtualizar = this.#aplicativoRepository.merge(aplicativoExistente, aplicativoAtualizado);
        return await this.#aplicativoRepository.save(aplicativoParaAtualizar);
    }

}



