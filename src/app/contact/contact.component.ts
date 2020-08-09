import { Component, OnInit } from "@angular/core";
import { HeadService } from "../header/head.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  bg = true;
  constructor(private head: HeadService) {
    this.head.getAuthStatusListener().subscribe((bg) => {
      this.bg = bg;
    });
  }

  ngOnInit() {}
}
