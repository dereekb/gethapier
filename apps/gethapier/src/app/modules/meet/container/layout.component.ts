import { AppMeetCreateFormPopoverComponent } from './../component/meet.form.popover.component';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HandleActionFunction } from '@dereekb/dbx-core';
import { DbxPopoverService } from '@dereekb/dbx-web';
import { AppMeetCreateFormValue } from '../component/meet.create.form.component';
import { delay, of, switchMap } from 'rxjs';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['../meet.scss']
})
export class MeetLayoutComponent {

  @ViewChild('addButton', { read: ElementRef })
  addButton!: ElementRef;

  // meetings$

  constructor(readonly popoverService: DbxPopoverService) { }

  handleCreateMeeting: HandleActionFunction<AppMeetCreateFormValue> = () => {
    const origin = this.addButton;
    const popover = AppMeetCreateFormPopoverComponent.openPopover(this.popoverService, { origin });

    return popover.afterClosed$.pipe(
      switchMap(() => {

        // todo: create meeting here.

        return of(true);
      })
    );
  };

}
