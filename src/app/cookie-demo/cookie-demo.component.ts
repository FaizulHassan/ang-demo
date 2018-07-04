import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-demo',
  templateUrl: './cookie-demo.component.html',
  styleUrls: ['./cookie-demo.component.css']
})
export class CookieDemoComponent implements OnInit {
  cookieValue = '';
  color = 'cyan';
  
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieService.set('Hello','helloWorld');
    this.cookieValue = this.cookieService.get('Hello');
  }
}
