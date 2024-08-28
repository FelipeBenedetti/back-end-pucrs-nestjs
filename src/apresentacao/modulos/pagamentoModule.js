import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from '../../domain/entities/pagamentoEntity';
import { PagamentoRepository } from '../../infrastructure/repositorios/pagamentoRepository';
import { PagamentoService } from '../../domain/services/pagamentoService';
import { PagamentoController } from '../controlers/pagamentoControler'
import { IPagamentoRepository } from '../../domain/repositorios/iPagamentoRepository';

@Module({
    imports: [TypeOrmModule.forFeature([Pagamento])],
    providers: [
        PagamentoService, IPagamentoRepository, PagamentoRepository],
    controllers: [PagamentoController],
})
export class PagamentoModule { }
