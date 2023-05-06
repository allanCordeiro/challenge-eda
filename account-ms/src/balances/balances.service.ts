import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetBalanceByIdDto } from './dto/get-balance-by-id.dto';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Injectable()
export class BalancesService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string) {
    const accountEntity = await this.prisma.balance.findFirstOrThrow({
      where: {
        accountId: id,
      },
      take: 1,
    });

    const accountDTO: GetBalanceByIdDto = {
      accountId: accountEntity.accountId,
      balanceValue: accountEntity.value,
    };

    return accountDTO;
  }

  create(createBalanceDto: CreateBalanceDto) {
    return this.prisma.balance.create({
      data: {
        accountId: createBalanceDto.accountId,
        value: createBalanceDto.value,
      },
    });
  }

  update(updateBalanceDto: UpdateBalanceDto) {
    return this.prisma.balance.update({
      where: {
        accountId: updateBalanceDto.accountId,
      },
      data: {
        value: updateBalanceDto.balanceValue,
      },
    });
  }
}
