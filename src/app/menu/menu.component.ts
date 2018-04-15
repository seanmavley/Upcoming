import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.sidenav').sidenav({
      draggable: true,
    });
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown({
      coverTrigger: false,
      constrainWidth: false
    });
  }

}
