import { Directive, Input } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appEnableOnCheck]',
})
export class EnableOnCheckDirective {
  @Input('appEnableOnCheck') checkboxName: string;
  @Input('formControlName') inputName: string;
  destroy$ = new Subject<void>();

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.getControl(this.checkboxName)
      .valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((checked: boolean) => {
        if (checked) {
          this.getControl(this.inputName).enable();
        } else {
          this.getControl(this.inputName).disable();
          this.getControl(this.inputName).setValue('');
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  getControl(controlName: string): FormControl {
    return this.controlContainer.control.get(controlName) as FormControl;
  }
}
