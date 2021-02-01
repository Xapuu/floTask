import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent  {
  @Input() user: IUser | undefined = undefined;
}
