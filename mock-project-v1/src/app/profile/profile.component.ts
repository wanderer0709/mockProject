import { Component, OnInit } from '@angular/core';
import { Profile, User, Article } from '../core/models';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ArticleService } from '../core/services/article.service';
 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: Profile = {} as Profile;
  currentUser: string;
  articleList: Article[];
  
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.currentUser = this.route.snapshot.paramMap.get("userName");
    this.userService.getUserProfile(this.currentUser).subscribe(data =>{
      this.userProfile = data.profile;
    });
  }

  viewMyArticle() {
    this.articleService.getAuthorArticle(this.userProfile.username).subscribe(data =>{
      this.articleList = data.articles;
    })
  }

  viewFavorite() {
    this.articleService.getFavoriteArticle(this.userProfile.username).subscribe(data =>{
      this.articleList = data.articles;
    })
  }

}
