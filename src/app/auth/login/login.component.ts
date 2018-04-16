import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  busy: boolean;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Login');
  }

  onSubmit(formData) {
    console.log(formData);
    this.busy = true;

    setTimeout(() => {
      this.busy = false;
    }, 2000);
  }

}
