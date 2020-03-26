import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"]
})
export class EventBindingComponent implements OnInit {
  serverCreation = "No server is created";

  onClickTheButton() {
    this.serverCreation = "Server is created successfully";
  }

  constructor() {}

  ngOnInit(): void {}
}
