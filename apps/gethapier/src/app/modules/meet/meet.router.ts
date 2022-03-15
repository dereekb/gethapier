import { Ng2StateDeclaration } from '@uirouter/angular';
import { MeetLayoutComponent } from './container/layout.component';

export const layoutState: Ng2StateDeclaration = {
  parent: 'app',
  name: 'meet',
  url: '/meet',
  component: MeetLayoutComponent,
};

export const STATES: Ng2StateDeclaration[] = [
  layoutState
];
