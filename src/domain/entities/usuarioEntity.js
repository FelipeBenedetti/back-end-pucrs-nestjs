import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    codigo;

    @Column('varchar')
    username;

    @Column('varchar')
    pass;
}
