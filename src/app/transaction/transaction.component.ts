import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionList: Object[];
  savingsAccountList: Object[];

	constructor(private transactionService: TransactionService) {
		this.getTransactionList();
		this.getSavingsAccountList();
		this.GetSavingsAccountTransaction("21215");
	}



	getTransactionList() {
  		this.transactionService.getTransactionList().subscribe(
  			res => {
          		this.transactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        		},
        		error => console.log(error)
  		)
  	}
  	getSavingsAccountList() {

           this.transactionService.getSavingsAccountList().subscribe(
             			res => {
                     		this.savingsAccountList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
                   		},
                   		error => console.log(error)
             		)
        }

        GetSavingsAccountTransaction(savingsAccount: string) {
        this.transactionService.getSavingsTransactionList(savingsAccount).subscribe(
        			res => {
                		this.transactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
              		},
              		error => console.log(error)
        		);
        }




ngOnInit() {}
}
