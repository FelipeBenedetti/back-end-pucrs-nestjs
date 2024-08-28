import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cliente } from '../entities/clienteEntity';



@Injectable()
@Dependencies(getRepositoryToken(Cliente))
export class ClienteService {
    #clienteRepository;
    constructor(clienteRepository) {
        this.#clienteRepository = clienteRepository;
    }

    async getCliente(codigo) {
        const resposta = await this.#clienteRepository.findOneBy({codigo})
        return resposta;
    }

    async getAllClientes() {
        const resposta = await this.#clienteRepository.find();
        return resposta;
    }

    async createCliente(cliente) {
        return this.#clienteRepository.save(cliente);
    }

    async deleteCliente(codigo) {
        const result = await this.#clienteRepository.delete({ codigo });
        if (result.affected === 0) {
            throw new Error(`Cliente com código ${codigo} não encontrado`);
        }
        return { message: `Cliente com código ${codigo} removido com sucesso` };
    }

    async atualizaCliente(codigo, clienteAtualizado) {
        const clienteExistente = await this.#clienteRepository.findOneBy({ codigo });
        if (!clienteExistente) {
            throw new Error(`Cliente com ID ${codigo} não encontrado`);
        }

        const clienteParaAtualizar = this.#clienteRepository.merge(clienteExistente, clienteAtualizado);
        return await this.#clienteRepository.save(clienteParaAtualizar);
    }

}
