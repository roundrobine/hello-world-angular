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
    this.service.getPosts().subscribe(response => {
      this.posts = response as any[];
    });
  }

  addNewPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = "";

    this.service.createPost(JSON.stringify(post)).subscribe(
      (response: any) => {
        console.log(response);
        post["id"] = response.id;
        this.posts as any[];
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          alert("This input data is incorrect, the post can not be created!");
          console.log(error);
        } else throw error;
      }
    );
  }

  updatePost(post) {
    this.service
      .updatePost(
        post.id,
        JSON.stringify({ title: "Pozdrav iz popovog polja" })
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      (response: any) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("This post has already been deleted");
        } else throw error;
      }
    );
  }
}
