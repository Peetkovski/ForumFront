import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../class/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  private postUrl = "http://localhost:8080/api/posts/all"

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.postUrl}`)
  }

  getOnePost(postId: string): Observable<Post>{
    return this.http.get<Post>("http://localhost:8080/api/posts/get"+postId)
  }

  likePost(postId: number): Observable<Post>{
    return this.http.get<Post>("http://localhost:8080/api/posts/like/"+postId)
  }
  dislikePost(postId: number): Observable<Post>{
    return this.http.get<Post>("http://localhost:8080/api/posts/dislike/"+postId)
  }
  getMostLikedPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/api/posts/trending")
  }

  getPostsByCategory(category: string): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/api/posts/get/category/"+category)
  }

  addPost(data:any){
    return this.http.post("http://localhost:8080/api/posts/add", data);
  }
  getAllCommentsForPost(postId: string): Observable<Comment[]>{
    return this.http.get<Comment[]>("http://localhost:8080/api/comment/get/"+postId)
  }

  getAllPostsForUser(username: string): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/api/posts/findBy"+username)
  }


}
