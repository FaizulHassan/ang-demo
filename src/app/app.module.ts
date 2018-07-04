import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { CookieService } from 'ngx-cookie-service';
import { MatCardModule } from '@angular/material/card';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
/*import { HeroSearchComponent }  from './hero-search/hero-search.component';*/
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { GoogleCaptchaComponent } from './google-captcha/google-captcha.component';
import { CookieDemoComponent } from './cookie-demo/cookie-demo.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { DirectiveExampleDirective } from './directive-example/directive-example.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    MatCardModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DemoPageComponent,
    HeroSearchComponent,
    GoogleCaptchaComponent,
    CookieDemoComponent,
    IndexPageComponent,
    DummyPageComponent,
    DirectiveExampleDirective,
    /*HeroSearchComponent*/
  ],
  providers: [ HeroService, MessageService, CookieService, MatCardModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/