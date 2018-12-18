import { Customer } from '../customer/customer';

export class Account {
  id: number;
  accountType: string;
  nickName: string;
  rewards: number;
  balance: number;
  customer: Customer;
 
  constructor(id:number,accountType:string,nickName:string,rewards:number,balance:number,customer:Customer){
    this.id= id;
    this.accountType = accountType;
    this.nickName = nickName;
    this.rewards = rewards;
    this.balance = balance;
    this.customer = customer;
}
}
