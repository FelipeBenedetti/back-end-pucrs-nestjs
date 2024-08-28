
//aplicativoControler.js
import { Controller, Dependencies, Get, Post, Body, Param, Bind, Put, Delete, UseGuards } from '@nestjs/common';
import { AplicativoService } from '../../domain/services/aplicativoService';
import { Aplicativo } from '../../domain/entities/aplicativoEntity';
import { JwtAuthGuard } from '../../auth/jwAuthGuard';

@Controller('aplicativos')
@Dependencies(AplicativoService)
export class AplicativoController {
    constructor(aplicativoService, aplicativo) {
        this.aplicativoService = aplicativoService;
        this.aplicativo = aplicativo;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllAplicativos() {
        return this.aplicativoService.getAllAplicativos();
    }

    @Get(':codigo')
    @Bind(Param())
    async getAplicativoPorId(param) {
        return this.aplicativoService.getAplicativo(param.codigo);
    }


    @Post('postar')
    @Bind(Body())
    criarAplicativo(aplicativo) {
        return this.aplicativoService.createAplicativo(aplicativo);
    }

    @Put('atualizar/:codigo')
    @Bind(Param('codigo'), Body())
    async atualizaAplicativoput(codigo, aplicativoAtualizado) {
        return this.aplicativoService.atualizaAplicativo(codigo, aplicativoAtualizado);
    }

    @Delete('deletar/:codigo')
    @Bind(Param('codigo'))
    async deleteAppPorId(codigo) {
        await this.aplicativoService.deleteAplicativo(codigo);
    }

}




/*// src/presentation/controllers/aplicativo.controller.js
import { Controller, Dependencies, Get, Post, Body, Param, Bind } from '@nestjs/common'
import { AplicativoService } from '../../domain/services/aplicativoService';
import { Aplicativo } from '../../domain/entities/aplicativoEntity';

@Controller('aplicativos')
@Dependencies(AplicativoService, Aplicativo)
export class AplicativoController {
    constructor(aplicativoService) {
        this.aplicativoService = aplicativoService;
    }

    @Get()
    async getAllAplicativos(){
        return this.aplicativoService.getAllAplicativos();
    }

    @Get(':id')
    @Bind(Param('id'), ({passthrough:true}))
    async getAllAplicativosPorId(id){
        const resposta = await this.aplicativoService.getAplicativo(id);
        return resposta;
    } 

    @Post()
    @Bind(Body())
    async postApp (aplicativo){
        return this.aplicativoService.createAplicativo(aplicativo)
    }
}

*/