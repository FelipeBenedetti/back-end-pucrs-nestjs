// src/app.module.js
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure/database/databasemodule';
import { ConfigModule } from '@nestjs/config';
import { AplicativoModule } from '../apresentacao/modulos/aplicativoModule';
import { AssinaturaModule } from '../apresentacao/modulos/assinaturaModule';
import { PagamentoModule } from '../apresentacao/modulos/pagamentoModule';
import { ClienteModule } from '../apresentacao/modulos/clienteModule';
import { AssinaturaValidaModule } from '../apresentacao/modulos/assinaturaValidaModule';
import { AuthModule } from '../auth/authModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    AssinaturaValidaModule,
    DatabaseModule,
    ClienteModule,
    AplicativoModule,
    AssinaturaModule,
    PagamentoModule,
    AuthModule,    
  ],
})

export class AppModule { }
