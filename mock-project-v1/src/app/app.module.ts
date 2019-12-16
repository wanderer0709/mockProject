import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule, FooterComponent, HeaderComponent } from './shared'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/helpers/jwtInterceptor';
import { ErrorInterceptor } from './core/helpers/errorInterceptor';







@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    HomeModule,
    SettingsModule,
    ProfileModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
