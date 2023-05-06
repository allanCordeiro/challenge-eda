import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'kafka-listener',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: '1',
            brokers: ['kafka:29092'], //TODO: configurar como variavel de ambiente
          },
          consumer: {
            groupId: 'balance-workers',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
