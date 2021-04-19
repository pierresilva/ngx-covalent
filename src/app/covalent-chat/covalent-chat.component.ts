import { Component, OnInit } from '@angular/core';
import {TdMediaService} from '@covalent/core/media';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-covalent-chat',
  templateUrl: './covalent-chat.component.html',
  styleUrls: ['./covalent-chat.component.scss']
})
export class CovalentChatComponent implements OnInit {

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

  logout() {
    console.log('Salir del sistema...')
  }

}
