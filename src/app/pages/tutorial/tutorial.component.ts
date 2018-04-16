import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      noWrap: true
    });
  }

}
