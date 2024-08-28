import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../domain/entities/usuarioEntity';
import { UsuarioService } from '../domain/services/usuarioService';

@Injectable()
@Dependencies(UsuarioService, JwtService)
export class AuthService {
    #usuariosService;
    #jwtService;

    constructor(usuariosService, jwtService) {
        this.#usuariosService = usuariosService;
        this.#jwtService = jwtService;
    }

    async validarUsuario(username, pass) {
        const usuario = await this.#usuariosService.findOneBy(username);
        if (usuario && bcrypt.compareSync(pass, usuario.pass)) {
            const { pass, ...resultado } = usuario;
            return resultado;
        }
        return null;
    }

    async login(usuario) {
        const payload = { username: usuario.username, sub: usuario.id, roles: usuario.roles };
        return {
            access_token: this.#jwtService.sign(payload)
        };
    }

    async cadastro(usuario){
        return this.#usuariosService.register(usuario)
    }

}

