import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorlistComponent } from './components/errorlist/errorlist.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    ErrorlistComponent, 
    ArticleListComponent, 
    JwPaginationComponent, LikeButtonComponent, FollowButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorlistComponent,
    ArticleListComponent,
    LikeButtonComponent,
    FollowButtonComponent,
  ]
})
export class SharedModule { }
