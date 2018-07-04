import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.css']
})
export class DummyPageComponent implements OnInit {
  heroName = ['aPPLE','Ball','Cat'];
  model ={};

  constructor() { 
  }

  ngOnInit() {    
  }
  
  // TODO: Remove this when we're done
  get faizulHassan() { 
    console.log('Model Value..\n',this.model);
    return JSON.stringify(this.model);    
  }
  
}
