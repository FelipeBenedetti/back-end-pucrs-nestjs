//assinaturaEntity.js
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from './clienteEntity'
import { Aplicativo } from './aplicativoEntity'

@Entity()
export class Assinatura {
    @PrimaryGeneratedColumn()
    codigo;

    @ManyToOne(() => Cliente, cliente => cliente.assinaturas, { onDelete: 'CASCADE' })
    codCli;

    @ManyToOne(() => Aplicativo, aplicativo => aplicativo.assinaturas, { onDelete: 'CASCADE' })
    codApp;

    @Column('date')
    inicioVigencia;

    @Column('date')
    fimVigencia;
}

