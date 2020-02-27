import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Dimo APP";
  post = {
    title: "Title",
    isFavorite: true
  };

  tweet = {
    body: "My like tweet is in the air...",
    likesCount: 10,
    isLiked: true
  };

  // courses = [
  //   { id: 1, name: "course1" },
  //   { id: 2, name: "course2" },
  //   { id: 3, name: "course3" }
  // ];
  courses = [];
  viewMode = "map";

  canSave = true;

  onFavoriteChanged(isFavourite: boolean) {
    console.log("Favorite changed: ", isFavourite);
  }

  onAdd() {
    this.courses.push({ id: 4, name: "course4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = "Updated";
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" }
    ];
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }
}
