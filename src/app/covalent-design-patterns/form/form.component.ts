import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = 'Desogn Patterns Form';

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

  user = {
    name: {
      first: '',
      last: '',
    },
    email: '',
    nickname: '',
    address: {
      street: '',
      street2: '',
      city: '',
      state: '',
      postcode: '',
      zip: ''
    },
    password: '',
    password2: ''
  };

  state1 = 'none';
  state2 = 'none';
  state3 = 'none';

  states = [
    'state 1',
    'state 2',
    'state 3',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  update(id: any, valid: any) {
    console.log('Id ' + id, 'Valid ' + valid);
  }

  save(valid: any) {
    console.log('Valid ' + valid);
  }

}
