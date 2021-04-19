import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '@shared';
import {LayoutsModule} from '@layouts/layouts.module';
import {MaterialModule} from '@app/material.module';
import {CovalentCommonModule} from '@covalent/core/common';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentStepsModule} from '@covalent/core/steps';
import {CovalentMediaModule} from '@covalent/core/media';
import {CovalentDialogsModule} from '@covalent/core/dialogs';
import {CovalentLoadingModule} from '@covalent/core/loading';
import {CovalentSearchModule} from '@covalent/core/search';
import {CovalentPagingModule} from '@covalent/core/paging';
import {CovalentNotificationsModule} from '@covalent/core/notifications';
import {CovalentMessageModule} from '@covalent/core/message';
import {CovalentMenuModule} from '@covalent/core/menu';
import {CovalentExpansionPanelModule} from '@covalent/core/expansion-panel';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutsModule,
    // Material
    MaterialModule,
    // Covalent
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMessageModule,
    CovalentMenuModule,
    CovalentExpansionPanelModule,

    HomeRoutingModule
  ]
})
export class HomeModule {
}
