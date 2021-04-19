import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentDesignPatternsRoutingModule } from './covalent-design-patterns-routing.module';
import { CardComponent } from './card/card.component';
import { CovalentDesignPatternsComponent } from './covalent-design-patterns.component';
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
import {CovalentDataTableModule} from '@covalent/core/data-table';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {CovalentBaseEchartsModule} from '@covalent/echarts/base';
import { AlertComponent } from './alert/alert.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FabComponent } from './fab/fab.component';
import { StepperComponent } from './stepper/stepper.component';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [CardComponent, CovalentDesignPatternsComponent, AlertComponent, FormComponent, ListComponent, DrawerComponent, FabComponent, StepperComponent, EmptyComponent],
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
    CovalentDesignPatternsRoutingModule
  ]
})
export class CovalentDesignPatternsModule { }
