import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SettingsModule { }
