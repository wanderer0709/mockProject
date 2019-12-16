import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
