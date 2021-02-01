import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initial state', () => {

    it('should not be disabled', () => {
      expect(component.disabled).toBeFalse();
    });

    it('should be of type button', () => {
      expect(component.type).toEqual('button');
    });

    it('should be in active state', () => {
      expect(component.active).toBeTrue();
    });

    it('should contain single button element', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button');
      fixture.detectChanges();
      expect(button.length).toEqual(1);
    });

    it('should contain single element with class `flo-button`', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('.flo-button');
      fixture.detectChanges();
      expect(button.length).toEqual(1);
    });
  });

  describe('click interaction', () => {
    it('should emit `emit` event when emitClick is invoked', () => {
      spyOn(component.emit, 'emit');
      component.emitClick();
      expect(component.emit.emit).toHaveBeenCalled();
    });


    it('should emit `emit` when the button inside the template is clicked', () => {
      spyOn(component.emit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.emit.emit).toHaveBeenCalled();
    });
  });

  describe('inactive state', () => {
    it('should not contain `inactive` class inside the button element', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');

      fixture.detectChanges();
      expect(button.className.split(' ').includes('inactive')).toBeFalse();
    });

    it('should contain `inactive` class inside the button element when inactive state is set to true', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');
      component.active = false;

      fixture.detectChanges();
      expect(button.className.split(' ').includes('inactive')).toBeTrue();
    });
  });

  describe('disabled state', () => {
    it('should not have a disabled button component inside the template initially', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');
      fixture.detectChanges();
      expect(button.disabled).toBeFalse();
    });
    it('should have a disabled button component inside the template when the `disabled` pop is set to true', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');
      component.disabled = true;
      fixture.detectChanges();
      expect(button.disabled).toBeTrue();
    });
  });
});
