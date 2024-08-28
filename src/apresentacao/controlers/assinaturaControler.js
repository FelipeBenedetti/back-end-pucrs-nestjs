// src/presentation/controllers/assinatura.controller.js
import { Controller, Dependencies, Get, Post, Body, Param, Bind, Put, Delete } from '@nestjs/common';
import { AssinaturaService } from '../../domain/services/assinaturaService';
import { AssinaturaValidaService } from '../../domain/services/servicoAssinaturaValida';

@Controller('assinaturas')
@Dependencies(AssinaturaService)
export class AssinaturaController {
    constructor(assinaturaService) {
        this.assinaturaService = assinaturaService;
    }



    @Get()
    getAllAssinaturas() {
        return this.assinaturaService.getAllAssinaturas();
    }


    @Get(':codigo')
    @Bind(Param())
    async getAssinaturaPorId(param) {
        return this.assinaturaService.getAssinatura(param.codigo);
    }

    @Post('postar')
    @Bind(Body())
    criarAssinatura(assinatura) {
        return this.assinaturaService.createAssinatura(assinatura);
    }

    @Put('atualizar/:codigo')
    @Bind(Param('codigo'), Body())
    async atualizaAssinaturaput(codigo, assinaturaAtualizada) {
        return this.assinaturaService.atualizaAssinatura(codigo, assinaturaAtualizada);
    }

    @Delete('deletar/:codigo')
    @Bind(Param('codigo'))
    async deleteAssinaturaPorId(codigo) {
        await this.assinaturaService.deleteAssinatura(codigo);
    }

}

