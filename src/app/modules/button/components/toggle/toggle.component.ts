import { Component, ContentChildren, EventEmitter, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { asapScheduler, merge, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnDestroy {

  @Input() focusedIndex: number | undefined = undefined;
  @Output() focusIndexChange: EventEmitter<number> = new EventEmitter();
  @ContentChildren(ButtonComponent) buttonRefs: QueryList<ButtonComponent> | undefined;
  toggleSubscription: Subscription | undefined;
  ngAfterViewInit() {
    asapScheduler.schedule(() => {
      this.buttonRefs?.forEach((ref, i) => {
        ref.active = this.focusedIndex === i;
      });

    });

    this.toggleSubscription = merge(
      ...(this.buttonRefs?.map(x => x.emit.pipe(mapTo(x))) as any)
    ).subscribe(x => {
      this.buttonRefs?.forEach((currentButtonRef, i) => {
        const matchingIndex = currentButtonRef === x;
        currentButtonRef.active = matchingIndex;
        if (matchingIndex) {
          this.focusIndexChange.emit(i);
        }
      });
    });
  }

  setFocus(newFocusedIndex: number) {
    this.buttonRefs?.forEach((ref, i) => {
      ref.active = newFocusedIndex === i;
    });

  }

  ngOnDestroy() {
    this.toggleSubscription?.unsubscribe();
  }
}
