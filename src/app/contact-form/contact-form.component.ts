import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: "Email" },
    { id: 2, name: "Phone" }
  ];

  log(x: NgModel) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }
}
