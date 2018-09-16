import {Component, OnInit} from '@angular/core';
import {e} from '@angular/core/src/render3';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public loginUser(event) {
    event.preventDefault();
    let target = event.target;
    let username = target.querySelector('#loginUsername').value;
    let password = target.querySelector('#loginPassword').value;
    if (this.authService.authentificateUser(username, password)) {
      this.router.navigate(['cards']);
    } else {

    }

  }
}
