import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { GoogleCaptchaComponent } from './google-captcha/google-captcha.component';
import { CookieDemoComponent } from './cookie-demo/cookie-demo.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'index', component: IndexPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'demo-page', component: DemoPageComponent },
  { path: 'googleCaptcha', component: GoogleCaptchaComponent },
  { path: 'cookie-demo', component: CookieDemoComponent },
  { path: 'dummy-page', component: DummyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }