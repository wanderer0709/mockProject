import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../core/models';
import { ArticleService } from '../../../core/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  
  @Input() articleList: Article[];
  pageOfItems: Array<any>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
}

}
