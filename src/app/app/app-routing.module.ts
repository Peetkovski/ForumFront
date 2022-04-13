import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {AdminComponent} from "../admin/admin.component";
import {UserComponent} from "../user/user.component";
import {LoginComponent} from "../login/login.component";
import {ForbiddenComponent} from "../forbidden/forbidden.component";
import {AuthGuard} from "../_auth/auth.guard";
import {PostComponent} from "../post/post.component";
import {PostinfoComponent} from "../postinfo/postinfo.component";
import {RegisterComponent} from "../register/register.component";
import {CreatePostComponent} from "../create-post/create-post.component";
import {MostlikedPostsComponent} from "../mostliked-posts/mostliked-posts.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user/:username', component: UserComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'mostLiked', component: MostlikedPostsComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'post/:id', component: PostinfoComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'createPost', component: CreatePostComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, MostlikedPostsComponent,AdminComponent, UserComponent, LoginComponent, ForbiddenComponent]
