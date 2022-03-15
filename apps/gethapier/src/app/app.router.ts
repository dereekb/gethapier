import { Ng2StateDeclaration } from '@uirouter/angular';
import { AppLayoutComponent } from './container/layout.component';

export const layoutState: Ng2StateDeclaration = {
  name: 'app',
  redirectTo: 'meet',
  component: AppLayoutComponent,
};

export const meetFutureState: Ng2StateDeclaration = {
  parent: 'app',
  name: 'meet.**',
  url: '/meet',
  loadChildren: () => import('./modules/meet/meet.module').then(m => m.MeetModule)
};

export const STATES = [
  layoutState,
  meetFutureState
];
