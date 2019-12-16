import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../core/models';
import { UserService } from '../../../core/services/user.service';
import { ArticleService } from '../../../core/services/article.service';


@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  @Input() article: Article;
  isSubmitting:boolean = false;

  constructor(private userService: UserService, 
    private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
  }

  likeArticle() {
    this.isSubmitting = true;
    if(!this.userService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }

    if(!this.article.favorited) {
      this.articleService.favorite(this.article.slug).subscribe(data => {
        this.article.favorited = true;
        this.article.favoritesCount++;
        this.isSubmitting = false;
      })
    }
    else {
      this.articleService.unfavortie(this.article.slug).subscribe(data => {
        this.article.favorited = false;
        this.article.favoritesCount--;
        this.isSubmitting = false;
      })
    }

    
  }

}
