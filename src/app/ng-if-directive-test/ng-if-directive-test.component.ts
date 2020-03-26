import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-if-directive-test",
  templateUrl: "./ng-if-directive-test.component.html",
  styleUrls: ["./ng-if-directive-test.component.css"]
})
export class NgIFDirectiveTestComponent implements OnInit {
  namer: String = "";
  namerStatus = false;

  constructor() {}

  getDataIfClicked() {
    this.namerStatus = true;
  }

  ngOnInit(): void {}
}
