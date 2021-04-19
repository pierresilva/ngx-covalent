import {AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {ITdDynamicElementConfig, TdDynamicElement, TdDynamicType} from '@covalent/dynamic-forms';
import {TdLayoutManageListComponent} from '@covalent/core/layout';
import {TdMediaService} from '@covalent/core/media';
import {TdDigitsPipe, tdRotateAnimation} from '@covalent/core/common';
import {DatePipe} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-covalent-dashboard',
  templateUrl: './covalent-dashboard.component.html',
  styleUrls: ['./covalent-dashboard.component.scss'],
  animations: [
    tdRotateAnimation,
  ],
})
export class CovalentDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;

  name = 'UI Platform';

  public year: string = new Date().getFullYear().toString();

  miniNav = false;

  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }

  // Dialog
  config = {
    width: '50%',
    height: '50%',
  };

  // Data table
  data: any[] = [
    {
      'name': 'Frozen yogurt',
      'type': 'Ice cream',
      'calories': 159.0,
      'fat': 6.0,
      'carbs': 24.0,
      'protein': 4.0,
    }, {
      'name': 'Ice cream sandwich',
      'type': 'Ice cream',
      'calories': 237.0,
      'fat': 9.0,
      'carbs': 37.0,
      'protein': 4.3,
    }, {
      'name': 'Eclair',
      'type': 'Pastry',
      'calories': 262.0,
      'fat': 16.0,
      'carbs': 24.0,
      'protein': 6.0,
    }, {
      'name': 'Cupcake',
      'type': 'Pastry',
      'calories': 305.0,
      'fat': 3.7,
      'carbs': 67.0,
      'protein': 4.3,
    }, {
      'name': 'Jelly bean',
      'type': 'Candy',
      'calories': 375.0,
      'fat': 0.0,
      'carbs': 94.0,
      'protein': 0.0,
    }, {
      'name': 'Lollipop',
      'type': 'Candy',
      'calories': 392.0,
      'fat': 0.2,
      'carbs': 98.0,
      'protein': 0.0,
    }, {
      'name': 'Honeycomb',
      'type': 'Other',
      'calories': 408.0,
      'fat': 3.2,
      'carbs': 87.0,
      'protein': 6.5,
    }, {
      'name': 'Donut',
      'type': 'Pastry',
      'calories': 452.0,
      'fat': 25.0,
      'carbs': 51.0,
      'protein': 4.9,
    }, {
      'name': 'KitKat',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
    }, {
      'name': 'Chocolate',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
    }, {
      'name': 'Chamoy',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
    },
  ];

  textElements: ITdDynamicElementConfig[] = [
    {
      name: 'input',
      hint: 'this is an input hint',
      type: TdDynamicElement.Input,
      required: false,
      flex: 50,
    },
    {
      name: 'requiredInput',
      label: 'Input Label',
      type: TdDynamicElement.Input,
      required: true,
      flex: 50,
    },
    {
      name: 'textLength',
      label: 'Text Length',
      type: TdDynamicElement.Input,
      minLength: 4,
      maxLength: 12,
      flex: 50,
    },
    {
      name: 'text',
      type: TdDynamicType.Text,
      required: false,
      default: 'Default',
      flex: 50,
      disabled: true,
    },
    {
      name: 'textarea',
      hint: 'this is a textarea hint',
      type: TdDynamicElement.Textarea,
      required: false,
    },
    {
      name: 'requiredPassword',
      label: 'Password Label',
      type: TdDynamicElement.Password,
      required: true,
    },
  ];

  routes: any[] = [
    {
      icon: 'home',
      route: '.',
      title: 'Home',
    }, {
      icon: 'library_books',
      route: '.',
      title: 'Documentation',
    }, {
      icon: 'color_lens',
      route: '.',
      title: 'Style Guide',
    }, {
      icon: 'view_quilt',
      route: '.',
      title: 'Layouts',
    }, {
      icon: 'picture_in_picture',
      route: '.',
      title: 'Components & Addons',
    },
  ];

  usermenu: any[] = [
    {
      icon: 'swap_horiz',
      route: '.',
      title: 'Switch account',
    }, {
      icon: 'tune',
      route: '.',
      title: 'Account settings',
    }, {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out',
    },
  ];

  navmenu: any[] = [
    {
      icon: 'looks_one',
      route: '.',
      title: 'First item',
      description: 'Item description',
    }, {
      icon: 'looks_two',
      route: '.',
      title: 'Second item',
      description: 'Item description',
    }, {
      icon: 'looks_3',
      route: '.',
      title: 'Third item',
      description: 'Item description',
    }, {
      icon: 'looks_4',
      route: '.',
      title: 'Fourth item',
      description: 'Item description',
    }, {
      icon: 'looks_5',
      route: '.',
      title: 'Fifth item',
      description: 'Item description',
    },
  ];


  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public dialog: MatDialog,
  ) {

    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://teradata.github.io/covalent/v3/assets/icons/teradata.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata-dark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://teradata.github.io/covalent/v3/assets/icons/teradata-dark.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://teradata.github.io/covalent/v3/assets/icons/covalent.svg')
    );

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
    this.manageList.sidenav.close();
    setTimeout(() => {
      this.manageList.sidenav.open();
    }, 100);
  }

  openTemplate() {
    this.dialog.open(this.template, this.config);
  }

  // NGX Charts Axis
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }

  axisDate(val: string): string {
    return new DatePipe('en').transform(val, 'hh a');
  }

}
