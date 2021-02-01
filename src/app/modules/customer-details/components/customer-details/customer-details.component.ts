import { Component } from '@angular/core';
import { USER } from 'src/app/constants';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  user = USER;
  todoList = new Array(100).fill(null).map((_,i) => `Todo #: ${i}`);
  suggestionList = new Array(12).fill('https://picsum.photos/300/200')
}
