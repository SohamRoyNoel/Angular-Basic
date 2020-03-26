import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bindings-summery",
  templateUrl: "./bindings-summery.component.html",
  styleUrls: ["./bindings-summery.component.css"]
})
export class BindingsSummeryComponent implements OnInit {
  names: String = "Candy All in One";
  candyCreationStatus: Boolean = false;
  status = "no Candy found";

  onClickTheButton() {
    this.status = "You got your " + this.names;
  }

  constructor() {
    setTimeout(() => {
      this.candyCreationStatus == true;
    }, 2000);
  }

  ngOnInit(): void {}
}
