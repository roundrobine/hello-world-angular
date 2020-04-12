import { BadInputError } from "./../common/bad-input-error";
import { NotFoundError } from "./../common/not-found-error";
import { AppError } from "./../common/app-error";
import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}
  ngOnInit() {
    this.service.getAll().subscribe((posts: any[]) => {
      this.posts = posts;
    });
  }

  addNewPost(input: HTMLInputElement) {
    const post = {
      title: input.value
    };
    this.posts.splice(0, 0, post);

    input.value = "";

    this.service.create(JSON.stringify(post)).subscribe(
      (newPost: any) => {
        console.log(newPost);
        post.id = newPost.id;
        this.posts as any[];
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
          alert("This input data is incorrect, the post can not be created!");
          console.log(error);
        } else { throw error; }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe((post: any) => {
      console.log(post);
    });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError) {
        alert("This post has already been deleted");
      } else { throw error; }
    });
  }
}
