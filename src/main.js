import { NestFactory } from '@nestjs/core';
import { AppModule } from './aplicacao/app.module';
import helmet from 'helmet';

console.log('Log de teste');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  await app.listen(3000);
}

bootstrap();







