import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IsAuthGuard } from './shared/guard/is-auth.guard';
import { UnauthGuard } from './shared/guard/unauth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]


  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsAuthGuard]

  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [UnauthGuard]

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
