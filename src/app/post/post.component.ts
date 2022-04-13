import { Component, OnInit } from '@angular/core';
import {Post} from "../class/post";
import {Router} from "@angular/router";
import {PostService} from "../_services/post.service";
import {CommentService} from "../_services/comment.service";
import {UserAuthService} from "../_services/user-auth.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: Post;
  username!: string;
  posts!: Post[];
  constructor(private router: Router,private postService: PostService, private authService: UserAuthService) { }


  Like(postId: number){
    this.postService.likePost(postId).subscribe( (data: Post) =>
    {
      this.post = data;
      window.location.reload();

    })
  }

  Dislike(postId: number){
    this.postService.dislikePost(postId).subscribe( (data: Post) =>{
      this.post = data;
      window.location.reload();

    })
  }

  ngOnInit(): void {

    this.username = this.authService.getUsername();

    this.postService.getPosts().subscribe((data: Post[])=>{
      this.posts = data;
    });

  }
}
