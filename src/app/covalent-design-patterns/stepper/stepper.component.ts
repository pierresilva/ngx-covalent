import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StepState} from '@covalent/core/steps';
import {NgForm} from '@angular/forms';
import {TdMediaService} from '@covalent/core/media';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  name = 'Steppers';

  linksSummary = false;
  @ViewChild('twitter', {read: ElementRef}) twitter: ElementRef;
  @ViewChild('linkedin', {read: ElementRef}) linkedin: ElementRef;
  @ViewChild('facebook', {read: ElementRef}) facebook: ElementRef;


  blockSave = true;
  state1 = 'none';
  state2 = 'none';
  state3 = 'none';
  @ViewChild('form1') _form1: NgForm;
  @ViewChild('form2') _form2: NgForm;
  @ViewChild('form3') _form3: NgForm;

  states: any[] = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'
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
      zip: '',
    },
    password: '',
    password2: ''
  };

  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
  }

  update(step: any, isValid: any): void {
    switch (step) {
      case 1:
        if (isValid) {
          this.state1 = 'complete';
        } else {
          this.state1 = 'required';
        }
        break;
      case 2:
        if (isValid) {
          this.state2 = 'complete';
        } else {
          this.state2 = 'required';
        }
        break;
      case 3:
        if (isValid) {
          this.state3 = 'complete';
          this.blockSave = false;
        } else {
          this.state3 = 'required';
        }
        console.log(this.twitter.nativeElement.value);
        if (this.twitter.nativeElement.value !== '' || this.linkedin.nativeElement.value !== '') {
          this.linksSummary = true;
        }
    }
  }

  save(valid: any) {
    console.log('Valid ' + valid);
  }

}
