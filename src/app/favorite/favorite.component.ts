import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styles: [
    `
      .glyphicon {
        color: blue;
      }
    `
  ],
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent {
  @Input("is-favorite") isFavorite: boolean;
  @Output("change") click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit(this.isFavorite);
  }
}
