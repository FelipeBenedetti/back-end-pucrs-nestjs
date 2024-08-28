import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies } from '@nestjs/common';
import { AuthService } from './authService';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
    #authService;
    
    constructor(authService) {
        super();
        this.#authService = authService;
    }


    async validate(username, pass) {
        const usuario = await this.#authService.validarUsuario(username, pass);
        if (!usuario) {
            console.log('User:' + usuario)
            throw new UnauthorizedException();
        }
        return usuario;
    }
}
