import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  constructor(private postservice: PostService) { }

  categories: Array<any> = [];

  private cats;

  ngOnInit(): void {

    this.cats = this.postservice.getCategories().subscribe(data => {
      this.categories = data;
    });

  }



}
