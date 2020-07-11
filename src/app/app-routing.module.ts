import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'to-do',
    loadChildren: () =>
      import('./pages/to-do/to-do.module').then((m) => m.ToDoModule),
  },
  {
    path: '**',
    redirectTo: 'to-do',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
