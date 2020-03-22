import { BadInputError } from "./../common/bad-input-error";
import { AppError } from "./../common/app-error";
import { NotFoundError } from "./../common/not-found-error";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts";

  getPosts() {
    return this.http.get(this.baseUrl);
  }

  createPost(post: any) {
    return this.http
      .post(this.baseUrl, JSON.stringify(post))
      .pipe(catchError(this.errorHandler));
  }

  updatePost(id: number, post: any) {
    return this.http.patch(this.baseUrl + "/" + id, JSON.stringify(post));
  }

  deletePost(id: number) {
    return this.http
      .delete(this.baseUrl + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) return throwError(new NotFoundError());
    else if (error.status === 400) return throwError(new BadInputError(error));
    return throwError(new AppError(error));
  }
}
