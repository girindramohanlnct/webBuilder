import { Component, OnInit } from "@angular/core";
import { HeadService } from "../header/head.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  bg = true;
  constructor(private head: HeadService) {
    this.head.getAuthStatusListener().subscribe((bg) => {
      this.bg = bg;
    });
  }

  ngOnInit() {}
}
