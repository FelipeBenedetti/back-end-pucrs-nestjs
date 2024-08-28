// src/presentation/controllers/cliente.controller.js
import { Controller, Dependencies, Get, Post, Body, Param, Bind, Put, Delete } from '@nestjs/common';
import { ClienteService } from '../../domain/services/clienteService';

@Controller('clientes')
@Dependencies(ClienteService)
export class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }

    @Get()
    getAllClientes() {
        return this.clienteService.getAllClientes();
    }


    @Get(':codigo')
    @Bind(Param())
    async getClientePorId(param) {
        return this.clienteService.getCliente(param.codigo);
    }

    @Post('postar')
    @Bind(Body())
    criarCliente(cliente) {
        return this.clienteService.createCliente(cliente);
    }

    @Put('atualizar/:codigo')
    @Bind(Param('codigo'), Body())
    async atualizaClientePut(codigo, clienteAtualizado) {
        return this.clienteService.atualizaCliente(codigo, clienteAtualizado);
    }

    @Delete('deletar/:codigo')
    @Bind(Param('codigo'))
    async deleteClientePorId(codigo) {
        await this.clienteService.deleteCliente(codigo);
    }
}

