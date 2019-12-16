import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserService } from '../core/services/user.service';
import { ArticleService } from '../core/services/article.service';
import { Article } from '../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  articleList: Article[];

  constructor( private router: Router, 
    private authService: AuthenticationService,
    private userService: UserService,
    private articleService: ArticleService ) { }

  ngOnInit() {
    if(this.userService.isAuthenticated()) {
      this.isLoggedIn = true;
    }
    this.articleService.getGlobalArticles().subscribe(data =>{
      this.articleList = data.articles;
    })
  }

  viewFeed() {
    this.articleService.getFeedArticles().subscribe(data =>{
      this.articleList = data.articles;
    })
  }

  viewGlobal() {
    this.articleService.getGlobalArticles().subscribe(data =>{
      this.articleList = data.articles;
    })
  }

  

}
