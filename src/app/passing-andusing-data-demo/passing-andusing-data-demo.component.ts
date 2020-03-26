import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-passing-andusing-data-demo",
  templateUrl: "./passing-andusing-data-demo.component.html",
  styleUrls: ["./passing-andusing-data-demo.component.css"]
})
export class PassingANDUsingDataDemoComponent implements OnInit {
  receivedText: String = "";

  getDataFromTextBox(event: Event) {
    this.receivedText = (<HTMLInputElement>event.target).value;
  }

  constructor() {}

  ngOnInit(): void {}
}
