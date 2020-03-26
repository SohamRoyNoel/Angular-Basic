import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-style-directive-test",
  templateUrl: "./ng-style-directive-test.component.html",
  styleUrls: ["./ng-style-directive-test.component.css"]
})
export class NgStyleDirectiveTestComponent implements OnInit {
  candyStatus = "offline";
  candyCount = 0;
  candyCountOfflineStatus = "online";
  candyCountOffline = 0.78;

  getCandyStatus() {
    this.candyCount = Math.random();
    this.candyCountOffline = Math.random();
    this.candyStatus = this.candyCount > 0.5 ? "online" : "offline";
    this.candyCountOfflineStatus =
      this.candyCountOffline > 0.5 ? "online" : "offline";
  }

  putStyleColor() {
    return this.candyStatus === "offline" ? "pink" : "blue";
  }

  putStyleOfflineColor() {
    return this.candyCountOfflineStatus === "online" ? "blue" : "pink";
  }

  constructor() {}

  ngOnInit(): void {}
}
