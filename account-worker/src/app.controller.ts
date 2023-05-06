import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaPayloadDto } from './dto/kafka-payload.dto';
import { AccountDto } from './dto/account.dto';
import { BalanceDto } from './dto/balance.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('accounts')
  async accountsListener(@Payload() message: KafkaPayloadDto) {
    console.log(message);

    const payload = JSON.stringify(message.Payload);
    const input = JSON.parse(payload);

    const account: AccountDto = {
      accountId: input.ID,
      value: input.Value,
    };

    const result = await this.appService.createAccount(account);
    if (result.status === 201) {
      console.log('account added sucessfully');
    } else {
      console.log(
        'error when try to retrieve account data. status code: ' +
          result.status,
      );
    }
    console.log(result.data);
  }

  @MessagePattern('balances')
  async balancesListener(@Payload() message: KafkaPayloadDto) {
    const payload = JSON.stringify(message.Payload);
    const input = JSON.parse(payload);

    const accountTo: BalanceDto = {
      accountId: input.account_id_to,
      balanceValue: input.balance_account_id_to,
    };

    const accountFrom: BalanceDto = {
      accountId: input.account_id_from,
      balanceValue: input.balance_account_id_from,
    };

    const resultTo = await this.appService.updateAccountBalance(accountTo);
    if (resultTo.status === 200) {
      console.log('account ' + accountTo.accountId + ' updated');
    } else {
      console.log(
        'errorr to update account ' +
          accountTo.accountId +
          ':' +
          resultTo.status,
      );
    }
    console.log(resultTo.data);

    const resultFrom = await this.appService.updateAccountBalance(accountFrom);
    if (resultFrom.status === 200) {
      console.log('account ' + accountTo.accountId + ' updated');
    } else {
      console.log(
        'errorr to update account ' +
          accountTo.accountId +
          ':' +
          resultFrom.status,
      );
    }
    console.log(resultFrom.data);
  }
}
