import { Usuario  } from "../entities/usuarioEntity";
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
@Dependencies(getRepositoryToken(Usuario))
export class UsuarioService{
    usuariosService;
    constructor(usuariosService){
        this.usuariosService = usuariosService
    }

    async findOneBy(username){
        return this.usuariosService.findOneBy({ username })
    }


    async register(usuario) {
        const hashedPassword = await bcrypt.hash(usuario.pass, 10);
        usuario.pass = hashedPassword;
        console.log('Usuário registrado:', usuario); // Log para usuário registrado
        return this.usuariosService.save(usuario);
    }

}