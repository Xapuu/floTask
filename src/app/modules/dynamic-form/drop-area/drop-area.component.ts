import { Input } from '@angular/core';
import { Component, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent {
  @Output() change = new EventEmitter();

  @HostBinding('class.active') active = false;
  @HostBinding('class.invalid') invalid = false;

  files = null;
  @HostListener('drop', ['$event']) onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.active = false;
    this.change.emit(this.getEventFileArray(event));
  }

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.active = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.active = false;
    this.invalid = false;
  }
  getEventFileArray(event: DragEvent): File[] {
    return event.dataTransfer?.files ? Array.from(event.dataTransfer.files) : [];
  }

}
