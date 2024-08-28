
import { Controller, Post, Request, UseGuards, Dependencies, Bind, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { AuthService } from './authService';
import { LocalAuthGuard } from './localAuthGuard';
import { LocalStrategy } from './localStrategy';
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
    #authService;
    constructor(authService) {
        this.#authService = authService;
    }


    @UseGuards(AuthGuard('local'))
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @Bind(Request())
    async login(req) {
        return this.#authService.login(req.user);
    }



    @Post('cadastro')
    @Bind(Body())
    cadastro(usuario) {
        console.log('Requisição de cadastro recebida:', usuario); // Log para requisição de cadastro recebida
        return this.#authService.cadastro(usuario);
    }

}
