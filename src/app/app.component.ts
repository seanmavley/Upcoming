import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // const is_toured = localStorage.getItem('is_toured');
    // if (!is_toured) {
    //   this.router.navigate(['/p/welcome']);
    // }
  }
}
