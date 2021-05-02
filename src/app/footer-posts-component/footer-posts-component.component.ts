import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts-component',
  templateUrl: './footer-posts-component.component.html',
  styleUrls: ['./footer-posts-component.component.css']
})
export class FooterPostsComponentComponent implements OnInit {

  constructor(private servicepost: PostService) { }
  
  posts : Array<BlogPost>;
  private post;

  ngOnInit(): void {

    this.post = this.servicepost.getPosts(1, null, null).subscribe(data => {
      this.posts = data.slice(0,3);
    })
  }

}
