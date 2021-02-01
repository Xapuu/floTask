import { Component } from '@angular/core';
import { USER } from 'src/app/constants';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  user = USER;
  transactions = (new Array(100)).fill(null).map(x => {
    return {
      currency: 'USD',
      amount: Math.random() * 1000,
      date: new Date()
    };
  });

}
