import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'register',
    component: AuthenticationComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile/:userName',
    component: ProfileComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
