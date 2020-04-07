import { Component } from '@angular/core';
import {CommentModel} from '../models/CommentModel';
import {CommentService} from './services/comment.service';

@Component({
  selector: 'app-root',
  template: `<h1>Comments</h1>
<app-comment *ngFor="let c of comments" [comment]="c"></app-comment>`,
  styles: ['h1{background-color: antiquewhite}']
})
export class AppComponent {
  comments: CommentModel[];

  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(value => this.comments = value);
  }
}
