import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../core/models';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  user: User = {} as User;
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(private router: Router, private authenticationService: AuthenticationService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
    
   }

  ngOnInit() {
    this.settingsForm.patchValue(this.authenticationService.currentUserValue);
    console.log(this.authenticationService.currentUserValue);
    
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    Object.assign(this.user, this.settingsForm.value);
    this.removeProField(this.user);
    console.log(this.user);
    
    this.isSubmitting = true;
    this.userService
    .updateUser(this.user)
    .subscribe((updatedUser) => this.router.navigateByUrl('/'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  removeProField(obj) {
    for(var field in obj) {
      if(obj[field] === "" || obj[field] === null) {
        delete obj[field];
      }
    }
  }

}