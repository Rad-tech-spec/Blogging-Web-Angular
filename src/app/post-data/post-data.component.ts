import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  constructor(private postservice: PostService, private route: ActivatedRoute) { }

  post: BlogPost;
  querySub: any;
  

  ngOnInit(): void {

    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post

      this.postservice.getPostbyId(params['id']).subscribe(data => {
        this.post = data;
      });

    });
  }

  ngOnDestroy(){if(this.querySub) this.querySub.unsubscribe()}

}
