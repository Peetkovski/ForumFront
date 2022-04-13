import { Component, OnInit } from '@angular/core';
import {Post} from "../class/post";
import {PostComponent} from "../post/post.component";
import {Router} from "@angular/router";
import {PostService} from "../_services/post.service";
import {CommentService} from "../_services/comment.service";
import {Comment} from "../class/comment";
import {NgForm} from "@angular/forms";
import {User} from "../class/user";

@Component({
  selector: 'app-postinfo',
  templateUrl: './postinfo.component.html',
  styleUrls: ['./postinfo.component.css']
})
export class PostinfoComponent implements OnInit {
  commentsUser!: Comment[];
  comment!: Comment;
  post!: Post;
  postComp!: PostComponent
  userNameComments!: string[];
  comments!: Comment[];
  constructor(private router: Router,private postService: PostService, private commentService: CommentService) { }

  Like(postId: number){
    this.postService.likePost(postId).subscribe( (data: Post) =>
    {
      this.post = data;
    })
  }

  addComment(postId:number,data: any){
    console.log(data)

    if (data.comment.comment == ''||  data.comment.comment == " " ){
      console.log("Empty")
    }
    else {
      // @ts-ignore
      this.commentService.addCommentToPost(postId, data).subscribe((response) => {
        window.location.reload();
      })
    }
  }

  Dislike(postId: number){
    this.postService.dislikePost(postId).subscribe( (data: Post) =>{
      this.post = data;
    })
  }


  ngOnInit(): void {




    // @ts-ignore
    this.commentService.getAllCommentsForPost(this.router.url).subscribe((data: Comment[]) =>{
      this.comments = data;
      // @ts-ignore
      console.log(data)
    })

    this.postService.getOnePost(this.router.url).subscribe((data: Post) =>{


      this.post = data;
      console.log(data)
      // @ts-ignore

    })
  }


}
