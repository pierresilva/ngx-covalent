import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutLandingComponent} from './layout-landing/layout-landing.component';
import {LayoutAuthComponent} from './layout-auth/layout-auth.component';
import {LayoutAdminComponent} from './layout-admin/layout-admin.component';
import {LayoutPageComponent} from './layout-page/layout-page.component';
import {MaterialModule} from '@app/material.module';
import {SharedModule} from '@shared';
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
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LayoutLandingComponent,
    LayoutAuthComponent,
    LayoutAdminComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
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
    // Shared
    SharedModule,
    RouterModule,
  ]
})
export class LayoutsModule {
}
