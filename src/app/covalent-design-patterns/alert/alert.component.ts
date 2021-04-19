import { Component, OnInit } from '@angular/core';
import {TdMediaService} from '@covalent/core/media';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {TdDialogService} from '@covalent/core/dialogs';
import {cli} from '@biesbjerg/ngx-translate-extract';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  name = 'Alerts';
  zip = '400005';
  first_name = 'Pierre';
  last_name = 'Silva';
  address = 'Calle 2 F Bis # 30A-04';
  city = 'Neiva';
  state = 'Huila';

  constructor(
    public media: TdMediaService,
    private _snackBarService: MatSnackBar,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _dialogService: TdDialogService
  ) { }

  ngOnInit(): void {
  }

  openAlert(): void {
    this._dialogService.openAlert({
      message: 'You don\'t have the required permissions to view this item! Contact an administrator!',
      title: '401 Permissions Error',
      closeButton: 'Ok',
    })
      .afterClosed()
      .subscribe(() => {
        console.log('alert closed');
      });
  }
  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this item? It\'s used on other items.',
      title: 'Confirm',
      cancelButton: 'Cancel',
      acceptButton: 'Delete',
    }).afterClosed()
      .subscribe((accept: boolean) => {
      if (accept) {
        console.log('Confirm agreed');
      } else {
        console.log('Confirm rejected');
      }
    });
  }

  showPromp(): void {
    this._dialogService.openPrompt({
      title: 'Prompt',
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      value: 'Populated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',
    })
      .afterClosed()
      .subscribe((res) => {
        if (res !== undefined) {
          console.log('promp closed with value', res);
        } else {
          console.log('promp canceled');
        }
      });
  }

  showSnackBar(): void {
    this._snackBarService
      .open('Connection timed out.  Showing limited messages.', 'RETRY', { duration: 3000 })
      .onAction()
      .subscribe(() => {
        console.log('do something');
      });
  }

}
