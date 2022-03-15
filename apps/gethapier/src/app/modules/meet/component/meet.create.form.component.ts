import { Component } from "@angular/core";
import { AbstractSyncFormlyFormDirective, dateTimeField, nameField, ProvideFormlyContext } from "@dereekb/dbx-form";
import { FormlyFieldConfig } from "@ngx-formly/core";

export interface AppMeetCreateFormValue {
  name: string;
  date: Date;
}

@Component({
  template: `<dbx-formly></dbx-formly>`,
  selector: 'app-meet-create-form',
  providers: [ProvideFormlyContext()]
})
export class AppMeetCreateFormComponent extends AbstractSyncFormlyFormDirective<AppMeetCreateFormValue> {

  readonly fields: FormlyFieldConfig[] = [
    nameField({ required: true }),
    dateTimeField({ required: true })
  ];

}
