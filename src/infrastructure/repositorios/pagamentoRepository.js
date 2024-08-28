// src/infrastructure/repositories/pagamento.repository.js
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pagamento } from '../../domain/entities/pagamentoEntity'
import { IPagamentoRepository } from '../../domain/repositorios/iPagamentoRepository'

@Injectable()
@Dependencies(getRepositoryToken(Pagamento))
export class PagamentoRepository extends IPagamentoRepository {
    pagamentoRepository;

    constructor(pagamentoRepository) {
        super();
        this.pagamentoRepository = pagamentoRepository
    }

    findById(id) {
        return this.pagamentoRepository.findOne({ where: { codigo: id } });
    }

    findAll() {
        return this.pagamentoRepository.find();
    }

    save(pagamento) {
        return this.pagamentoRepository.save(pagamento).then(() => { });
    }
}


/*
@Injectable()
@Dependencies(Repository)
export class PagamentoRepository extends IPagamentoRepository {
    constructor(@InjectRepository(Pagamento) pagamentoRepository) {
        super();
        this.pagamentoRepository = pagamentoRepository;
    }

    findById(id) {
        return this.pagamentoRepository.findOne({ where: { codigo: id } });
    }

    findAll() {
        return this.pagamentoRepository.find();
    }

    save(pagamento) {
        return this.pagamentoRepository.save(pagamento).then(() => { });
    }
}
*/