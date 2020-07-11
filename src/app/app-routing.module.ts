import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/const/routes.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.login,
    pathMatch: 'full',
  },
  {
    path: ROUTES.login,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ROUTES.toDo,
    // canActivate: [CanActivateGuard],
    // canDeactivate: [CanDeactivateGuard],
    loadChildren: () =>
      import('./pages/to-do/to-do.module').then((m) => m.ToDoModule),
  },
  {
    path: '**',
    redirectTo: ROUTES.toDo,
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
