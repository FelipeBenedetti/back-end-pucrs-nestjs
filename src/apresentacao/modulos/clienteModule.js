
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../../domain/entities/clienteEntity'
import { ClienteRepository } from '../../infrastructure/repositorios/clienteRepository';
import { ClienteService } from '../../domain/services/clienteService';
import { ClienteController } from '../controlers/clienteControler'
import { IClienteRepository } from '../../domain/repositorios/iClienteRepository';


@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    controllers: [ClienteController],
    providers: [ClienteService, IClienteRepository, ClienteRepository],
})

export class ClienteModule { }
