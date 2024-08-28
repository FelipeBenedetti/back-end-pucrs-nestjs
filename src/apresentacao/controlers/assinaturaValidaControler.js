// src/presentation/controllers/assinatura.controller.js
import { Controller, Dependencies, Get, Post, Body, Param, Bind, Put, Delete } from '@nestjs/common';
import { AssinaturaService } from '../../domain/services/assinaturaService';
import { AssinaturaValidaService } from '../../domain/services/servicoAssinaturaValida';

@Controller('assinaturas')
@Dependencies(AssinaturaValidaService)
export class AssinaturaValidaController {
    constructor(assinaturaValidaService) {
        this.assinaturaValidaService = assinaturaValidaService;
    }

    @Get('isvalida/:codigo')
    @Bind(Param())
    async getAssinaturaValida(param) {
        const valida = await this.assinaturaValidaService.isAssinaturaValida(param.codigo);
        return { valida };
    }
}