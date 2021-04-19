import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CovalentDashboardRoutingModule} from './covalent-dashboard-routing.module';
import {CovalentDashboardComponent} from './covalent-dashboard.component';
import {MaterialModule} from '@app/material.module';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentStepsModule} from '@covalent/core/steps';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {CovalentBaseEchartsModule} from '@covalent/echarts/base';
import {CovalentMediaModule} from '@covalent/core/media';
import {CovalentDataTableModule} from '@covalent/core/data-table';
import {CovalentCommonModule} from '@covalent/core/common';
import {CovalentExpansionPanelModule} from '@covalent/core/expansion-panel';
import {CovalentDialogsModule} from '@covalent/core/dialogs';
import {CovalentLoadingModule} from '@covalent/core/loading';
import {CovalentSearchModule} from '@covalent/core/search';
import {CovalentPagingModule} from '@covalent/core/paging';
import {CovalentNotificationsModule} from '@covalent/core/notifications';
import {CovalentMenuModule} from '@covalent/core/menu';
import {CovalentMessageModule} from '@covalent/core/message';


@NgModule({
  declarations: [CovalentDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
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
    CovalentDataTableModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    CovalentDashboardRoutingModule
  ]
})
export class CovalentDashboardModule {
}
