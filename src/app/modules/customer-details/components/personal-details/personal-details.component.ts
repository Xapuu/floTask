import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  @Input() user: IUser | undefined = undefined;
}
