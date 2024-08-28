// src/infrastructure/repositories/cliente.repository.js
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cliente } from '../../domain/entities/clienteEntity'
import { IClienteRepository } from '../../domain/repositorios/iClienteRepository';


@Injectable()
@Dependencies(getRepositoryToken(Cliente))
export class ClienteRepository extends IClienteRepository{
    clienteRepository;
    constructor (clienteRepository){
        super()
        this.clienteRepository = clienteRepository;
    }
    
    findById(id) {
        return this.clienteRepository.findOne({ where: { codigo: id } });
    }

    findAll() {
        return this.clienteRepository.find();
    }

    save(cliente) {
        return this.clienteRepository.save(cliente).then(() => { });
    }
}

/*
@Injectable()
@Dependencies(Cliente, Repository, IClienteRepository)
export class ClienteRepository {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    findById(id) {
        return this.clienteRepository.findOne({ where: { codigo: id } });
    }

    findAll() {
        return this.clienteRepository.find();
    }

    save(cliente) {
        return this.clienteRepository.save(cliente).then(() => { });
    }
}
*/