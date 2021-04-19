import {Component, OnInit} from '@angular/core';
import {TdMediaService} from '@covalent/core/media';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


export enum OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  name = 'Manage List';

  data: any[] = [
    {
      'created_at': '2015-11-04T19:00:31Z',
      'name': 'Change data capture for sales DB',
      'owner': 'Kyle',
      'updated_at': '2016-11-08T19:00:31Z',
    }, {
      'created_at': '2015-11-08T19:00:31Z',
      'name': 'Change data capture for MF DB',
      'owner': 'Richa',
      'updated_at': '2016-11-09T19:00:31Z',
    }, {
      'created_at': '2015-12-11T19:00:31Z',
      'name': 'Our Data Lake',
      'owner': 'Ed',
      'updated_at': '2016-12-07T19:00:31Z',
    }, {
      'created_at': '2015-11-05T19:00:31Z',
      'name': 'Nightly batched analytics',
      'owner': 'Ilsun',
      'updated_at': '2016-11-07T19:00:31Z',
    }, {
      'created_at': '2015-12-12T19:00:31Z',
      'name': 'Long term data storage',
      'owner': 'Jeremy',
      'updated_at': '2016-12-08T19:00:31Z',
    }, {
      'created_at': '2015-12-15T19:00:31Z',
      'name': 'On the fly analytics',
      'owner': 'Jenn',
      'updated_at': '2016-12-09T19:00:31Z',
    }
  ];

  columnOptions: any[] = [{
    name: 'Updated',
    value: 'updated_at',
  }, {
    name: 'Created',
    value: 'created_at',
  }];
  sortKey: string = this.columnOptions[0].value;
  headers: any = {};
  pageSize = 5;
  example1 = true;

  single: any[];
  multi: any[];

  routes: any[] = [
    {
      icon: 'dashboard',
      route: '.',
      title: 'Dashboard',
    }, {
      icon: 'library_books',
      route: '.',
      title: 'Documentation',
    }, {
      icon: 'build',
      route: '.',
      title: 'Console',
    }
  ];
  mgmtmenu: any[] = [
    {
      icon: 'people',
      route: '.',
      title: 'Users',
      description: 'Item description',
    }, {
      icon: 'dns',
      route: '.',
      title: 'Systems',
      description: 'Item description',
    }
  ];
  monitormenu: any[] = [{
    icon: 'verified_user',
    route: '.',
    title: 'Audit Logs',
    description: 'Item description',
  }, {
    icon: 'settings_system_daydream',
    route: '.',
    title: 'Monitored Systems',
    description: 'Item description',
  }
  ];
  settingsmenu: any[] = [
    {
      icon: 'lock',
      route: '.',
      title: 'Authentication',
      description: 'Item description',
    }, {
      icon: 'email',
      route: '.',
      title: 'SMTP Settings',
      description: 'Item description',
    }
  ];

  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.columnOptions.forEach((option: any) => {
      this.headers[option.value] = OrderBy.ASC;
    });
  }

  isASC(sortKey: string): boolean {
    return this.headers[sortKey] === OrderBy.ASC;
  }

  sortBy(sortKey: string): void {
    if (this.headers[sortKey] === OrderBy.ASC) {
      this.headers[sortKey] = OrderBy.DESC;
    } else {
      this.headers[sortKey] = OrderBy.ASC;
    }
    this.data = this.data.sort((rowA: any, rowB: any) => {
      const cellA = rowA[sortKey];
      const cellB = rowB[sortKey];
      let sort = 0;
      if (cellA < cellB) {
        sort = -1;
      } else if (cellA > cellB) {
        sort = 1;
      }
      return sort * (this.headers[sortKey] === OrderBy.DESC ? -1 : 1);
    });
  }

  search(event: any): void {
    // dummy func
    console.log('search: ' + event.target.value);
  }

}
