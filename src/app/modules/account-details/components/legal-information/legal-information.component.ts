import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.scss']
})
export class LegalInformationComponent {
  @Input() user: undefined | IUser = undefined;
}
