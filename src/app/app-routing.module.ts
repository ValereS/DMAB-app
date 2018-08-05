import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main-frame/home/home.component';
import { LoginComponent } from './main-frame/login/login.component';
import { PageNotFoundComponent } from './main-frame/page-not-found/page-not-found.component';

/* PageNotFound must be the last declaration, otherwise other routes won't work */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
