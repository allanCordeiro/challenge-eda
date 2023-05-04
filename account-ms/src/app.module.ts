import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalancesModule } from './balances/balances.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BalancesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
