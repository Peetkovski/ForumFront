import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../_services/post.service";
import {Post} from "../class/post";
import {UserAuthService} from "../_services/user-auth.service";

@Component({
  selector: 'app-mostliked-posts',
  templateUrl: './mostliked-posts.component.html',
  styleUrls: ['./mostliked-posts.component.css']
})
export class MostlikedPostsComponent implements OnInit {

  posts!: Post[];
  username!: string;
  post!: Post;

  constructor(private router: Router, private postService: PostService, private authService: UserAuthService) { }

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

    this.postService.getMostLikedPosts().subscribe((data: Post[]) => {
      this.posts = data;
    })

  }

}
