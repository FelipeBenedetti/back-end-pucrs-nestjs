// Clienteentity.js
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    codigo;

    @Column('varchar')
    nome;

    @Column('varchar')
    email;
}
