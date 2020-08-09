import { Component, OnInit } from "@angular/core";
import { HeadService } from "../header/head.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  bg = true;

  constructor(private head: HeadService) {
    this.head.getAuthStatusListener().subscribe((bg) => {
      this.bg = bg;
    });
  }

  ngOnInit() {}
}
