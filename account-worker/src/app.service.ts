import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AccountDto } from './dto/account.dto';
import { BalanceDto } from './dto/balance.dto';

@Injectable()
export class AppService {
  async createAccount(message: AccountDto) {
    //TODO: configurar como variavel de ambiente
    const response = await axios.post(
      'http://balance-app:3000/balances',
      message,
    );
    return response;
  }

  async updateAccountBalance(message: BalanceDto) {
    //TODO: configurar como variavel de ambiente
    const response = await axios.put(
      'http://balance-app:3000/balances',
      message,
    );
    return response;
  }
}
