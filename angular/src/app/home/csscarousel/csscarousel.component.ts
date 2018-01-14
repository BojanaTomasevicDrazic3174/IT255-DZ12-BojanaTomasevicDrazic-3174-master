import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csscarousel',
  templateUrl: './csscarousel.component.html',
  styleUrls: ['./csscarousel.component.css']
})
export class CSSCarouselComponent implements OnInit {

  images = [
            { "title": "Ekskluzivna usluga za vas odmor", "url": "./assets/img/lirote.jpg","active":true },
            { "title": "Ekskluzivna usluga za vas odmor", "url": "./assets/img/prva.jpg","active":false },
            { "title": "Ekskluzivna usluga za vas odmor", "url": "./assets/img/04.jpg" ,"active":false },
            { "title": "Ekskluzivna usluga za vas odmor", "url": "./assets/img/sedma.jpg" ,"active":false }
          ];

  constructor() {  }

  isActive(image: string) {
          return image === this.images[0].url;
      }
  ngOnInit() {
  }

}
