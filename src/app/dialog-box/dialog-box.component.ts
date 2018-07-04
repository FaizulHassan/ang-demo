import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/*import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';*/

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})

export class DialogBoxComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialogBox(): void{
    this.dialog.open(DialogBoxContent,{
      width:'300px'
    });
  }
}

@Component({
  selector:'dialog-content',
  templateUrl:'dialog-content.html',
})

export class DialogBoxContent {
  constructor(public dialogRef:MatDialogRef<DialogBoxContent>,
  @Inject(MAT_DIALOG_DATA) public data:any){}
}