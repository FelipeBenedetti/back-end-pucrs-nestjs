// aplicativoRepository.js
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Aplicativo } from '../../domain/entities/aplicativoEntity'
import { IAplicativoRepository } from '../../domain/repositorios/iAplicativoRepository';

@Injectable()
@Dependencies(getRepositoryToken(Aplicativo))
export class AplicativoRepository extends IAplicativoRepository{
    aplicativoRepository;

    constructor(aplicativoRepository){
        super();
        this.aplicativoRepository = aplicativoRepository
    }

    async findById(id) {
        return this.aplicativoRepository.findOne({ where: { codigo: id } });
    }

    async findAll() {
        return this.aplicativoRepository.find();
    }

    async save(aplicativo) {
        return this.aplicativoRepository.save(aplicativo).then(() => { });
    }
}

