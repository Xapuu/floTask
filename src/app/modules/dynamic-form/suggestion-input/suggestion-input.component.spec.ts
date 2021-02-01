import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionInputComponent } from './suggestion-input.component';

describe('SuggestionInputComponent', () => {
  let component: SuggestionInputComponent;
  let fixture: ComponentFixture<SuggestionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
