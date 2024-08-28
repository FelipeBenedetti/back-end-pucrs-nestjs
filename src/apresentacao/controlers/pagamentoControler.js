// src/presentation/controllers/pagamento.controller.js
import { Controller, Dependencies, Get, Post, Body, Param, Bind, Put, Delete } from '@nestjs/common';
import { PagamentoService } from '../../domain/services/pagamentoService';
import { Pagamento } from '../../domain/entities/pagamentoEntity';

@Controller('pagamentos')
@Dependencies(PagamentoService)
export class PagamentoController {
    constructor(pagamentoService) {
        this.pagamentoService = pagamentoService;
    }

    @Get()
    getAllPagamentos() {
        return this.pagamentoService.getAllPagamentos();
    }

    @Get(':codigo')
    @Bind(Param())
    async getPagamentosPorID(param) {
        return this.pagamentoService.getPagamento(param.codigo);
    }

    @Post('postar')
    @Bind(Body())
    postPagamento(pagamento){
        return this.pagamentoService.createPagamento(pagamento)
    }

    @Put('atualizar/:codigo')
    @Bind(Param('codigo'), Body())
    async atualizaPagamentoPut(codigo, pagamentoAtualizado) {
        return this.pagamentoService.atualizaPagamento(codigo, pagamentoAtualizado);
    }

    @Delete('deletar/:codigo')
    @Bind(Param('codigo'))
    async deletePagamentoPorId(codigo) {
        await this.pagamentoService.deletePagamento(codigo);
    }
}
