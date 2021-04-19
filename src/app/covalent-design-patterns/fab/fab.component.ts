import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {TdLayoutManageListComponent} from '@covalent/core/layout';
import {TdMediaService} from '@covalent/core/media';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  @ViewChild('manageList') manageList: TdLayoutManageListComponent;


  name = 'FAB Pattern';

  pie: any[];
  single: any[];
  multi: any[];
  times: any[];

  // Nav
  routes = [
    {
      title: 'Manage Users',
      route: '/',
      icon: 'people',
    }
  ];

  usermenu = [
    {
      title: 'Manage Users',
      route: '/',
      icon: 'people',
    },
    {
      title: 'Add Users',
      route: '/',
      icon: 'people',
    }
  ];

  // Data table
  data: any[] = [
    {
      'name': 'Seinfield',
      'status': 'Active',
      'type': 'Admin',
    }, {
      'name': 'George',
      'status': 'Active',
      'type': 'User',
    }, {
      'name': 'Kramer',
      'status': 'Active',
      'type': 'User',
    }, {
      'name': 'Elaine',
      'status': 'Active',
      'type': 'User',
    }, {
      'name': 'Newman',
      'status': 'Active',
      'type': 'User',
    },
  ];

  constructor(
    public media: TdMediaService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
  }

}
