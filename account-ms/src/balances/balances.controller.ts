import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BalancesService } from './balances.service';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Controller('balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.balancesService.findOne(id);
  }

  @Post()
  create(@Body() createBalanceDto: CreateBalanceDto) {
    return this.balancesService.create(createBalanceDto);
  }

  @Put()
  update(@Body() updateBalanceDto: UpdateBalanceDto) {
    return this.balancesService.update(updateBalanceDto);
  }
}
