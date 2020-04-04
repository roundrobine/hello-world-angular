import { RouterModule } from "@angular/router";
import { GithubService } from "./services/github.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { PostService } from "./services/post.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SummaryPipe } from "./summary.pipe";
import { FavoriteComponent } from "./favorite/favorite.component";
import { PanelComponent } from "./panel/panel.component";
import { LikeComponent } from "./like/like.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { UltimateCourseFormComponent } from "./ultimate-course-form/ultimate-course-form.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PostsComponent } from "./posts/posts.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    UltimateCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers/:id/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
