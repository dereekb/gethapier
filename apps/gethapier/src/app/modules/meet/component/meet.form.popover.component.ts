import { Component, ElementRef, ViewChild } from '@angular/core';
import { HandleActionFunction } from '@dereekb/dbx-core';
import { DbxPopoverKey, AbstractPopoverDirective, DbxPopoverComponent, DbxPopoverService } from '@dereekb/dbx-web';
import { NgPopoverRef } from 'ng-overlay-container';
import { first, of } from 'rxjs';
import { AppMeetCreateFormComponent, AppMeetCreateFormValue } from './meet.create.form.component';

export const DEFAULT_INTERACTION_POPOVER_COMPOSER_POPOVER_KEY = 'createmeet';

export interface AppMeetCreateFormPopoverConfig {
  origin: ElementRef;
}

@Component({
  template: `
  <dbx-popover-content>
    <dbx-popover-header header="Create Meet"></dbx-popover-header>
    <dbx-action [dbxActionHandler]="handleSubmitForm">
      <app-meet-create-form dbxActionForm></app-meet-create-form>
      <dbx-button dbxActionButton text="Create"></dbx-button>
    </dbx-action>
  </dbx-popover-content>
  `
})
export class AppMeetCreateFormPopoverComponent extends AbstractPopoverDirective<AppMeetCreateFormValue> {

  @ViewChild(AppMeetCreateFormComponent)
  readonly form!: AppMeetCreateFormComponent;

  static openPopover(popoverService: DbxPopoverService, { origin }: AppMeetCreateFormPopoverConfig, popoverKey?: DbxPopoverKey): NgPopoverRef<any, AppMeetCreateFormValue> {
    return popoverService.open({
      key: popoverKey ?? DEFAULT_INTERACTION_POPOVER_COMPOSER_POPOVER_KEY,
      origin,
      componentClass: AppMeetCreateFormPopoverComponent
    });
  }

  submitForm() {
    this.form.getValue().pipe(first()).subscribe();
  }

  handleSubmitForm: HandleActionFunction<AppMeetCreateFormValue> = (value: AppMeetCreateFormValue) => {
    this.returnAndClose(value);
    return of(true);
  }

}
