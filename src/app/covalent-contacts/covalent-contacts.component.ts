import { Component, OnInit } from '@angular/core';
import {TdMediaService} from '@covalent/core/media';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-covalent-contacts',
  templateUrl: './covalent-contacts.component.html',
  styleUrls: ['./covalent-contacts.component.scss']
})
export class CovalentContactsComponent implements OnInit {

  name = 'Contacts';

  routes: any[] = [
    {
      title: 'Inbox',
      route: '/',
      icon: 'email',
    }, {
      title: 'Snoozed',
      route: '/',
      icon: 'access_time',
    }, {
      title: 'Drafts',
      route: '/',
      icon: 'drafts',
    }, {
      title: 'Sent',
      route: '/',
      icon: 'send',
    }, {
      title: 'Trash',
      route: '/',
      icon: 'delete',
    },
  ];

  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log('Open dialog');
  }

}
