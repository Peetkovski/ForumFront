import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app/app-routing.module";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./_auth/auth.guard";
import {AuthInterceptior} from "./_auth/auth.intercept";
import {UserService} from "./_services/user.service";
import { CommentComponent } from './comment/comment.component';
import {PostComponent} from "./post/post.component";
import { PostinfoComponent } from './postinfo/postinfo.component';
import { RegisterComponent } from './register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MostlikedPostsComponent } from './mostliked-posts/mostliked-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    PostComponent,
    CommentComponent,
    PostinfoComponent,
    RegisterComponent,
    CreatePostComponent,
    MostlikedPostsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptior,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
