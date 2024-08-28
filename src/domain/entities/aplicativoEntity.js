// plicativoentity.js
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aplicativo {
    @PrimaryGeneratedColumn()
    codigo;

    @Column('varchar')
    nome;

    @Column('decimal', { precision: 6, scale: 2 }) // Alteração aqui
    custoMensal; 
}

