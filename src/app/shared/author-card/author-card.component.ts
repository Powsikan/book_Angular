import {Component, Input, OnInit} from '@angular/core';
import {Author} from '../../book';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() author: Author;
  constructor() { }

  ngOnInit() {
  }

}
