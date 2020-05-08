import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class TransactionService {

  constructor (private http:Http){}

   getTransactionList() {
      let url = "http://localhost:8080/api/v1/transaction/";
      return this.http.get(url, { withCredentials: false });
    }

    getSavingsAccountList() {
      let url = "http://localhost:8080/api/v1/savings/";
       return this.http.get(url, { withCredentials: false });
    }

    getSavingsTransactionList(accountNumber: string) {
     let url = "http://localhost:8080/api/v1/transaction/latest/"+accountNumber;
    return this.http.get(url, { withCredentials: false });
   }

  confirmTransaction(id: number) {
    let url = "http://localhost:8080/api/appointment/"+id+"/confirm";
    return this.http.get(url, { withCredentials: true });
  }

}
