import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDemoComponent } from './cookie-demo.component';

describe('CookieDemoComponent', () => {
  let component: CookieDemoComponent;
  let fixture: ComponentFixture<CookieDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
