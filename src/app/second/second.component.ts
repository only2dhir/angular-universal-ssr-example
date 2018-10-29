import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      const city = {city: 'Bangalore'};
      window.localStorage.setItem('sample-key', JSON.stringify(city));
    }
  }

}
