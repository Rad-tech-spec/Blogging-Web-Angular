import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private postservice: PostService) { }

  tags: Array<any> = [];
  private tag;

  ngOnInit(): void {

    this.tag = this.postservice.getTags().subscribe(data => this.tags = data);

  }

}
