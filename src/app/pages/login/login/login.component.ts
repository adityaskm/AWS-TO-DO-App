import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { ROUTES } from '../../../shared/const/routes.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      console.log('routing');
      this.router.navigateByUrl(ROUTES.toDo);
    }
  }
}
