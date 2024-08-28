import { Module } from '@nestjs/common';
import { AuthController } from './authController';
import { AuthService } from './authService';
import { LocalAuthGuard } from './localAuthGuard';
import { LocalStrategy } from './localStrategy';
import { Usuario } from '../domain/entities/usuarioEntity';
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt';
import { UsuarioService } from '../domain/services/usuarioService';
import { jwtConstants } from './jwtConstante';
import { JwtStrategy } from './jwtStrategy';


@Module({
    imports:  [ TypeOrmModule.forFeature([Usuario]), 
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '500s' },
    }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalAuthGuard, LocalStrategy, UsuarioService, JwtStrategy],
    exports: [JwtModule, AuthService]
})

export class AuthModule { }

