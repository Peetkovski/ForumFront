import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../_services/user.service";
import {User} from "../class/user";
import {PostService} from "../_services/post.service";
import {Post} from "../class/post";
import {CommentService} from "../_services/comment.service";
import {Comment} from "../class/comment";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  post!: Post[];
  comments!: Comment[];
  constructor(private router: Router, private userService: UserService, private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {

    //TODO DODAJ USTAWIENIA UŻYTKOWNIKA I RESPONSE

      this.userService.getUser(this.router.url).subscribe((data: User) =>{
      this.user = data;
    })

    this.postService.getAllPostsForUser(this.router.url).subscribe((data: Post[]) =>{
      this.post = data;
    })

    // @ts-ignore
    this.commentService.getAllCommentsForUser(this.router.url).subscribe((data:Comment[]) => {
      this.comments = data;
    })

  }

}
