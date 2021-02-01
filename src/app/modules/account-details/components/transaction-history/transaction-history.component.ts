import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/types/transactions';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
  @Input() transactions: ITransaction[] = [];
}
