import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./@modules/modules.module').then(m => m.ModulesModule)
  },
  {
    path: 'covalent-dashboard',
    loadChildren: () => import('./covalent-dashboard/covalent-dashboard.module').then(m => m.CovalentDashboardModule)
  },
  {
    path: 'covalent-chat',
    loadChildren: () => import('./covalent-chat/covalent-chat.module').then(m => m.CovalentChatModule)
  },
  {
    path: 'covalent-landing',
    loadChildren: () => import('./covalent-landing/covalent-landing.module').then(m => m.CovalentLandingModule)
  },
  {
    path: 'covalent-mail',
    loadChildren: () => import('./covalent-mail/covalent-mail.module').then(m => m.CovalentMailModule)
  },
  {
    path: 'covalent-contacts',
    loadChildren: () => import('./covalent-contacts/covalent-contacts.module').then(m => m.CovalentContactsModule)
  },
  {
    path: 'covalent-design-patterns',
    loadChildren: () => import('./covalent-design-patterns/covalent-design-patterns.module').then(m => m.CovalentDesignPatternsModule)
  },

  /*Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    }
  ]),*/
  // Fallback when no prior route is matched
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
