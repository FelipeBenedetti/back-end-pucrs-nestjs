// src/infrastructure / repositories / assinatura.repository.js
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Assinatura } from '../../domain/entities/assinaturaEntity'
import { IAssinaturaRepository } from '../../domain/repositorios/iAssinaturaRepository';

@Injectable()
@Dependencies(getRepositoryToken(Assinatura))
export class AssinaturaRepository extends IAssinaturaRepository{
    assinaturaRepository;
    constructor(assinaturaRepository){
    super();
    this.assinaturaRepository = assinaturaRepository;
    }
    
    findById(id) {
        return this.assinaturaRepository.findOne({ where: { codigo: id } });
    }

    findAll() {
        return this.assinaturaRepository.find();
    }

    save(assinatura) {
        return this.assinaturaRepository.save(assinatura).then(() => { });
    }
}

/*
@Injectable()
@Dependencies(Repository)
export class AssinaturaRepository extends IAssinaturaRepository {
    constructor(@InjectRepository(Assinatura) assinaturaRepository) {
        super();
        this.assinaturaRepository = assinaturaRepository;
    }

    findById(id) {
        return this.assinaturaRepository.findOne({ where: { codigo: id } });
    }

    findAll() {
        return this.assinaturaRepository.find();
    }

    save(assinatura) {
        return this.assinaturaRepository.save(assinatura).then(() => { });
    }
}
*/