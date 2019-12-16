import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { User } from '../../../core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe((userData) => {
      this.currentUser = userData;
    })
   }
  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigateByUrl('/');
  }

}
