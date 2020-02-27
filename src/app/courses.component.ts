import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "app-courses",
  template: `
    <h2>{{ "Title: " + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="email = onKeyUp()" />
    <div>
      {{ course.title | uppercase }} <br />
      {{ course.students | number }} <br />
      {{ course.rating | number: "1.1-1" }} <br />
      {{ course.price | currency: "AUD":true:"3.2-2" }} <br />
      {{ course.releaseDate | date: "shortDate" }} <br />
    </div>
    {{ text | summary: 10 }}
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  imageUrl = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";
  colSpan = 2;
  isActive = true;
  email = "me@example.com";
  text = `There are many variations of passages of Lorem Ipsum available, but the majority 
  have suffered alteration in some form, by injected humour, or randomised words which don't 
  look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
  there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
   tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a 
   dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum 
   which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,
    or non-characteristic words etc.`;

  course = {
    title: "Dimo Master Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  constructor(service: CoursesService) {
    // const service = new CoursesService();
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onDivClicked() {
    console.log("Div has been clicked!!!");
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Button has been clicked!!!", $event);
  }

  onKeyUp() {
    console.log(this.email);
  }
}

// <input
// [value]="email"
// (keyup.enter)="email = $event.target.value; onKeyUp(email.value)"
// />
