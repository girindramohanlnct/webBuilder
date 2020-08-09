import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeadService {
  bg = true;
  private authStatusListener = new Subject<boolean>();

  constructor() {}

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getbg(bg: boolean) {
    this.authStatusListener.next(bg);
  }
}
