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
    this.http.get(this.baseUrl).subscribe(response => {
      this.posts = response as any[];
    });
  }

  addNewPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = "";

    this.http.post(this.baseUrl, JSON.stringify(post)).subscribe(
      (response: any) => {
        console.log(response);
        post["id"] = response.id;
        this.posts as any[];
        this.posts.splice(0, 0, post);
      },
      error => {
        console.log(error);
      }
    );
  }

  updatePost(post) {
    this.http
      .patch(this.baseUrl + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http
      .delete(this.baseUrl + "/" + post.id)
      .subscribe((response: any) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
