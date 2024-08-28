import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assinatura } from '../../domain/entities/assinaturaEntity';
import { AssinaturaValidaController } from '../controlers/assinaturaValidaControler';
import { AssinaturaValidaService } from '../../domain/services/servicoAssinaturaValida';


@Module({
    imports: [TypeOrmModule.forFeature([Assinatura])],
    controllers: [AssinaturaValidaController],
    providers: [AssinaturaValidaService],
})

export class AssinaturaValidaModule { }