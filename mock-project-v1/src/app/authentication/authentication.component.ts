import { Component, OnInit } from '@angular/core';
import { Errors } from '../core/models/errors';
import { AuthenticationService } from '../core/services/authentication.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authForm: FormGroup;
  authType: string = '';
  pageTitle: string = '';
  isSubmitting = false;
  errors: Errors = {errors:{}};



  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
    private route: ActivatedRoute, private router: Router) {

    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;

      if (this.authType === 'register') {
        this.pageTitle = 'Sign up';
        this.authForm.addControl('username', new FormControl())
      }
      else {
        this.pageTitle = 'Sign in';
      }
    })
  }

  submitForm() {
    this.isSubmitting = true;
    this.authenticationService.logIn(this.authForm.value, this.authType)
      .subscribe(data => {
        this.router.navigateByUrl('/')
      },
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      )
  }

}
