import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-suggestion-input',
  templateUrl: './suggestion-input.component.html',
  styleUrls: ['./suggestion-input.component.scss']
})
export class SuggestionInputComponent implements OnDestroy, AfterViewInit {

  @ViewChild('inputRef') inputRef: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('dropdownRef') dropdownRef: ElementRef<HTMLInputElement> | undefined;
  @Input() hints$: Observable<string[]> | undefined;
  @Input() controlRef: FormControl = new FormControl();


  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.autoCompleteVisible = false;
    }
  }
  filteredHints$: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  autoCompleteVisible = false;

  isAlive$ = new Subject();

  constructor(private render: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {

    if (!this.hints$ || !this.controlRef) {
      console.warn('Missing input config');
      return;
    }

    const inputWidth = this.inputRef?.nativeElement.offsetWidth;
    this.render.setStyle(this.dropdownRef?.nativeElement, 'width', inputWidth + 'px');


    combineLatest([
      (this.controlRef?.valueChanges as Observable<string>).pipe(startWith('')),
      this.hints$
    ]).pipe(
      debounceTime(100),
      map(([term, options]) => {
        if (!term) {
          return options;
        }
        return options.filter(x => x.includes(term));
      })
    ).subscribe(filteredOptions => this.filteredHints$.next(filteredOptions));
  }

  ngOnDestroy() {
    this.isAlive$.next();
  }

  focusIn() {
    this.autoCompleteVisible = true;
  }


  selectOption(selection: string) {
    if (!this.controlRef) {
      console.warn('Missing control ref');
      return;
    }
    this.controlRef.setValue(selection);
    this.autoCompleteVisible = false;
  }

}
