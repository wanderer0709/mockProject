import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/core/models';
import { ProfileService } from '../../../core/services/profile.service';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() profile: Profile;
  isSubmitting: boolean = false;

  constructor(private profileService: ProfileService, 
    private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  toggleFollow() {
    if(!this.userService.isAuthenticated) {
      this.route.navigateByUrl('/login');
    }
    if(!this.profile.following) {
      this.profileService.follow(this.profile.username).subscribe(data =>{
        this.isSubmitting = false;
        this.profile.following = true;
      });
    }
    else {
      this.profileService.unfollow(this.profile.username).subscribe(data =>{
        this.isSubmitting = false;
        this.profile.following = false;
      });
    }
  }




}
