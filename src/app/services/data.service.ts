import { BadInputError } from "./../common/bad-input-error";
import { AppError } from "./../common/app-error";
import { NotFoundError } from "./../common/not-found-error";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

export class DataService {
    constructor(private baseUrl: string, private http: HttpClient) {}

    getAll() {
        return this.http.get(this.baseUrl).pipe(catchError(this.errorHandler));
    }

    create(resource: any) {
        return this.http
            .post(this.baseUrl, JSON.stringify(resource))
            .pipe(catchError(this.errorHandler));
    }

    update(resoruce: any) {
        return this.http
            .patch(this.baseUrl + "/" + resoruce.id, JSON.stringify(resoruce))
            .pipe(catchError(this.errorHandler));
    }

    delete(id: number) {
        return this.http
            .delete(this.baseUrl + "/" + id)
            .pipe(catchError(this.errorHandler));
    }

    private errorHandler(error: HttpErrorResponse) {
        if (error.status === 404) { return throwError(new NotFoundError()); } else if (error.status === 400) {
            return throwError(new BadInputError(error));
 }
        return throwError(new AppError(error));
    }
}
