import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers", // Element selector : identified by <app-servers></app-servers> on app.component.html page
  // selector: "[app-servers]", // Select element by attribute : <div app-servers></div> on app.component.html page
  // selector: ".app-servers", // select element by class name : <div class="app-servers"></div> on app.component.html page
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
