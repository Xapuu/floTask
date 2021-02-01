import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() type = 'button';
  active = true;
  @Output() emit: EventEmitter<void> = new EventEmitter();
  emitClick(): void {
    this.emit.emit();
  }
}
