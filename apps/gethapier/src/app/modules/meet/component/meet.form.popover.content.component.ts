import { Component, EventEmitter, Input, Output, OnDestroy, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { AppMeetCreateFormComponent, AppMeetCreateFormValue } from './meet.create.form.component';

@Component({
  selector: 'app-meet-create-form-popover-content',
  template: `
  `
})
export class AppMeetCreateFormPopoverContentComponent implements OnDestroy {

  @ViewChild(AppMeetCreateFormComponent)
  readonly form!: AppMeetCreateFormComponent;

  @Output()
  readonly return = new EventEmitter<AppMeetCreateFormValue>();

  @Output()
  readonly close = new EventEmitter<void>();

  ngOnDestroy(): void {
    this.return.complete();
  }

  submitForm() {
    this.form.getValue().pipe(first()).subscribe((value) => {
      this.return.next(value);
    });
  }

  closeWithoutValue() {
    this.close.next();
  }

}
