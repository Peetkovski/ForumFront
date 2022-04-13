import { Injectable } from '@angular/core';
import {PostComponent} from "../post/post.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  postId!: PostComponent;
  id!: number;
  PATH_OF_API = "http://localhost:8080";


  constructor(private http: HttpClient) { }

  getAllCommentsForPost(postId: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.PATH_OF_API + "/api/comment/get"+postId)
  }

  addCommentToPost( postId: number,addComment: any){
    return this.http.post(this.PATH_OF_API + '/api/comment/add/'+postId, addComment)
  }

  getAllCommentsForUser(username: string):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.PATH_OF_API + '/api/comment/get/findBy'+ username)
  }


}
