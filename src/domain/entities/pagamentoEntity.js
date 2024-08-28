// pagamentoEntity.js
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Assinatura } from './assinaturaEntity'

@Entity()
export class Pagamento {
    @PrimaryGeneratedColumn()
    codigo;

    @Column('double')
    valor;

    @Column('date')
    data;
    
    @ManyToOne(() => Assinatura, assinatura => assinatura.codigo, { onDelete: 'CASCADE' })
    codAss;
    
}
