import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-binding-demo",
  templateUrl: "./property-binding-demo.component.html",
  styleUrls: ["./property-binding-demo.component.css"]
})
export class PropertyBindingDemoComponent implements OnInit {
  onchange = false;

  constructor() {
    setTimeout(() => {
      this.onchange = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
