import { Customer } from '../customer/customer';

export class Account {
  id: number;
  accountType: string;
  nickName: string;
  rewards: number;
  balance: number;
  customer: Customer;
}
