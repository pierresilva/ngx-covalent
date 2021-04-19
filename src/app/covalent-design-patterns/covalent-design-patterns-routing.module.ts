import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CovalentDesignPatternsComponent} from '@app/covalent-design-patterns/covalent-design-patterns.component';
import {CardComponent} from '@app/covalent-design-patterns/card/card.component';
import {AlertComponent} from '@app/covalent-design-patterns/alert/alert.component';
import {ListComponent} from '@app/covalent-design-patterns/list/list.component';
import {FormComponent} from '@app/covalent-design-patterns/form/form.component';
import {DrawerComponent} from '@app/covalent-design-patterns/drawer/drawer.component';
import {FabComponent} from '@app/covalent-design-patterns/fab/fab.component';
import {StepperComponent} from '@app/covalent-design-patterns/stepper/stepper.component';
import {EmptyComponent} from '@app/covalent-design-patterns/empty/empty.component';

const routes: Routes = [
  {
    path: '',
    component: CovalentDesignPatternsComponent
  },
  {
    path: 'cards',
    component: CardComponent
  },
  {
    path: 'alerts',
    component: AlertComponent
  },
  {
    path: 'lists',
    component: ListComponent
  },
  {
    path: 'forms',
    component: FormComponent
  },
  {
    path: 'drawers',
    component: DrawerComponent
  },
  {
    path: 'fabs',
    component: FabComponent
  },
  {
    path: 'steppers',
    component: StepperComponent
  },
  {
    path: 'empties',
    component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovalentDesignPatternsRoutingModule {
}
