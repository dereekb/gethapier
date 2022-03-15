import { Component } from '@angular/core';
import { ClickableAnchorLink } from '@dereekb/dbx-core';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent {

  readonly homeAnchor: ClickableAnchorLink = {
    title: 'GetHapier',
    ref: 'app'
  };

}
