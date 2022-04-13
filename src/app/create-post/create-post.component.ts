import { Component, OnInit } from '@angular/core';
import {PostService} from "../_services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  savePost(data:any){

    console.log(data);
    this.postService.addPost(data).subscribe((result) =>{
      this.router.navigate(['/posts'])
    },
      (error) =>{
      this.router.navigate(['/createPost'])
      }

    );
  }
}
