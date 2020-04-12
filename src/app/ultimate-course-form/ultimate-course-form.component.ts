import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "ultimate-course-form",
  templateUrl: "./ultimate-course-form.component.html",
  styleUrls: ["./ultimate-course-form.component.css"]
})
export class UltimateCourseFormComponent {
  // form = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
