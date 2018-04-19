import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  busy: boolean;

  constructor(private title: Title, private auth: AuthService) { }

  ngOnInit() {
    this.title.setTitle('Login');
  }

  onSubmit(formData) {
    console.log(formData);
    this.busy = true;
    this.auth.login()
      .subscribe((res) => {
        console.log(res);
      })
  }

}
