import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler {
  handleError(error) {
    alert("An unespected error occure");
    console.log(error);
  }
}
