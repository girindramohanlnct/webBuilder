import { Component, OnInit, ViewChild } from "@angular/core";
import { HeadService } from "./head.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  bg = true;

  constructor(private head: HeadService) {}

  ngOnInit() {}

  hamclick() {
    console.log("hello");
    this.bg = !this.bg;
    this.head.getbg(this.bg);
    // const hamburger = document.querySelector(".hamburger");
    // const navLinks = document.querySelector(".nav-links");
    // const links = document.querySelectorAll(".nav-links li");
    // navLinks.classList.toggle("open");
    // links.forEach((link) => {
    //   link.classList.toggle("fade");
    // });
  }
}
