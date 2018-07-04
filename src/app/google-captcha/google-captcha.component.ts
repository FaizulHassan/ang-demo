import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-captcha',
  templateUrl: './google-captcha.component.html',
  styleUrls: ['./google-captcha.component.css']
})
export class GoogleCaptchaComponent implements OnInit {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor() { }

  ngOnInit() {
  }

}
