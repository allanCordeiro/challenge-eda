import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          //TODO: configurar como variavel de ambiente
          brokers: ['kafka:29092'],
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
