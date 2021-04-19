import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {merge} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {Keyboard} from '@ionic-native/keyboard/ngx';

import {environment} from '@env/environment';
import {Logger, UntilDestroy, untilDestroyed} from '@core';
import {I18nService} from '@app/i18n';
import {MatIconRegistry} from '@angular/material/icon';
import { Plugins } from '@capacitor/core';



const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private zone: NgZone,
    private keyboard: Keyboard,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private i18nService: I18nService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
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

  async ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data),
        untilDestroyed(this)
      )
      .subscribe(event => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
    // Cordova platform and plugins initialization
    document.addEventListener('deviceready', () => {
      this.zone.run(() => this.onCordovaReady());
    }, false);
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }

  private onCordovaReady() {
    log.debug('device ready');

    if ((window as any).cordova) {
      log.debug('Cordova init');

      this.keyboard.hideFormAccessoryBar(true);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }
  }

}
