import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function urgentValidator(control: AbstractControl, v2: AbstractControl): ValidationErrors | null {

    if (control.value === 'URGENT') {
        v2.setValidators(Validators.required);
    } else {
        v2.clearValidators();
    }
    v2.markAllAsTouched();
    v2.updateValueAndValidity();

    return {};
}