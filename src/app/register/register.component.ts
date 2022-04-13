import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(registerForm: NgForm) {
    this.userService.register(registerForm.value).subscribe(
      (response:any) => {
        this.router.navigate(['/login'])
    },
      (error) => {
        console.log(error);
        this.router.navigate(['/register'])
    }
    )
  }
}
