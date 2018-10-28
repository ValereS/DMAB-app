import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "dmab-loadinglogo",
  templateUrl: "./loadinglogo.component.html",
  styleUrls: ["./loadinglogo.component.scss"],
  animations: [
    trigger("fill", [
      state(
        "empty",
        style({
          height: "0px"
        })
      ),
      state(
        "full",
        style({
          opacity: 1,
          height: "500px"
        })
      ),
      transition("empty => full", [animate("2s")])
    ])
  ]
})
export class LoadinglogoComponent implements OnInit {
  loadState = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loadState = true;
    }, 1000);
  }
}
