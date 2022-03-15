import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { STATES } from './meet.router';
import { AppSharedModule } from '@/app/shared/app.shared.module';
import { MeetLayoutComponent } from './container/layout.component';
import { AppMeetCreateFormComponent } from './component/meet.create.form.component';
import { AppMeetCreateFormPopoverComponent } from './component/meet.form.popover.component';

@NgModule({
  imports: [
    AppSharedModule,
    UIRouterModule.forChild({
      states: STATES
    })
  ],
  declarations: [
    MeetLayoutComponent,
    AppMeetCreateFormComponent,
    AppMeetCreateFormPopoverComponent 
  ],
})
export class MeetModule { }
