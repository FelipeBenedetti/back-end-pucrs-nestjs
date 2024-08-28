//aplicativoModule.js
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Aplicativo } from '../../domain/entities/aplicativoEntity';
import { AplicativoRepository } from '../../infrastructure/repositorios/aplicativoRepository';
import { AplicativoService } from '../../domain/services/aplicativoService';
import { AplicativoController } from '../controlers/aplicativoControler'
import { IAplicativoRepository } from '../../domain/repositorios/iAplicativoRepository';

@Module({
    imports: [TypeOrmModule.forFeature([Aplicativo])],
    providers: [AplicativoService, AplicativoRepository, IAplicativoRepository],
    controllers: [AplicativoController],
})
export class AplicativoModule { }

