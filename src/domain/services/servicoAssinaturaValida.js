import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Assinatura } from '../entities/assinaturaEntity';


@Injectable()
@Dependencies(getRepositoryToken(Assinatura))
export class AssinaturaValidaService {
    #assinaturaRepository;
    constructor(assinaturaRepository){
        this.#assinaturaRepository = assinaturaRepository;
    }


    async isAssinaturaValida(codigo) {
        const assinatura = await this.#assinaturaRepository.findOneBy({ codigo });
        if (!assinatura) {
            return false;
        }

        const hoje = new Date();
        return (
            hoje >= new Date(assinatura.inicioVigencia) &&
            (!assinatura.fimVigencia || hoje <= new Date(assinatura.fimVigencia))
        );
    }
}
