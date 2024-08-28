//assinaturaModule.js

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Assinatura } from '../../domain/entities/assinaturaEntity';
import { AssinaturaRepository } from '../../infrastructure/repositorios/assinaturaRepository';
import { AssinaturaService } from '../../domain/services/assinaturaService';
import { AssinaturaController } from '../controlers/assinaturaControler'
import { IAssinaturaRepository } from '../../domain/repositorios/iAssinaturaRepository';
import { AssinaturaValidaService } from '../../domain/services/servicoAssinaturaValida';


@Module({
    imports: [TypeOrmModule.forFeature([Assinatura])],
    providers: [AssinaturaService, AssinaturaValidaService, 
        IAssinaturaRepository, AssinaturaRepository],
    controllers: [AssinaturaController],
})
export class AssinaturaModule { }
