// src/domain/repositories/ipagamento-repository.js
//import { Injectable, Dependencies } from '@nestjs/common';
//import { Pagamento } from '../entities/pagamento.entity';
const { Pagamento } = require('../entities/pagamentoEntity');
export class IPagamentoRepository {
    findById(id) {
        throw new Error('Método não implementado');
    }
    findAll() {
        throw new Error('Método não implementado');
    }
    save(pagamento) {
        throw new Error('Método não implementado');
    }
}
