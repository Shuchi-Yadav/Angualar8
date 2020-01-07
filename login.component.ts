import { Component, OnInit } from '@angular/core';
import { CaptchaService} from '../captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public code;
  constructor(private captcha:CaptchaService) { }

  ngOnInit() {
    this.code = this.captcha.GenerateCode();
  }

}
