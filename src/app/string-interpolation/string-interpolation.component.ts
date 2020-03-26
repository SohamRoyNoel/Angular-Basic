import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-string-interpolation",
  templateUrl: "./string-interpolation.component.html",
  styleUrls: ["./string-interpolation.component.css"]
})
export class StringInterpolationComponent {
  id: number = 10;
  id1: number = 20;

  name: String = "Candy";

  getHerName() {
    this.name = "Big Candy";
    return this.name;
  }
}
