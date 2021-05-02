import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  blogposts : Observable<BlogPost[]> = new Observable<BlogPost[]>();
  posts: BlogPost = new BlogPost;
  constructor(private http : HttpClient) { }

  getPosts(page: number, tag: string, category: string): Observable<BlogPost[]>
  {
    let postApi = "";
    
    if(page != null || page != undefined)
    {
      postApi =  `https://aqueous-mountain-90863.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
      if(tag != null || tag != undefined)
      {  
        postApi += `$tag=${tag}`;
      }  

      if(category != null || category != undefined)
      {
        postApi += `&category=${category}`;
      }
    }

    let highest = "2019-01-01T00:00:00.000Z";
    
    return this.http.get<BlogPost[]>(postApi).pipe( 
      map(data => data.sort(( a1: BlogPost, a2: BlogPost) => {
        
        return a1.postDate.trim() > a2.postDate.trim() ? 1 : -1
              
        return 0;
      })));
  }

  



  getPostbyId(id): Observable<BlogPost>
  {
    let postApi = "";

    if(id != null || id != undefined) 
      postApi = `https://aqueous-mountain-90863.herokuapp.com/api/posts/${id}`;


    return this.http.get<BlogPost>(postApi)
  }

  getCategories() : Observable<any>
  {
    return this.http.get<any>(`https://aqueous-mountain-90863.herokuapp.com/api/categories`); 
  }

  getTags(): Observable<String[]>
  {
    return this.http.get<String[]>(`https://aqueous-mountain-90863.herokuapp.com/api/tags`); 
  }
}
