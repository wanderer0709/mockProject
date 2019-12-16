import { Component, Input } from '@angular/core';
import { Errors } from '../../../core/models';

@Component({
  selector: 'app-errorlist',
  templateUrl: './errorlist.component.html',
  styleUrls: ['./errorlist.component.css']
})
export class ErrorlistComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => key + errorList.errors[key]);
  }

  get errorList() { return this.formattedErrors; }



}
