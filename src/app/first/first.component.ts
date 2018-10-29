import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('First Component');
    const metaItems = [
      { name: 'description', content: 'First component description.'},
      { name: 'twitter:title', content: 'Angular Universal Server Side Rendering | DevGlan' },
      { name: 'twitter:description', content: 'In this article, we will be discussing about server-side rendering of Angular app.' },
      { property: 'og:title', content: 'Angular Universal Server Side Rendering | DevGlan' },
      { itemprop: 'name', content: 'First component name.' },
      { itemprop: 'description', content: 'In this article, we will be discussing about server-side rendering of Angular app.' }
    ];
    this.meta.addTags(metaItems, true);
  }

}
