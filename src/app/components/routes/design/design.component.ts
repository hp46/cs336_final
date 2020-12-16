import { Component, OnInit, Inject, Injectable, Input  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
  }


  ngOnInit(): void {
  }
  
  // Originally planned to use a pop-up system, but scrapped

  // openDialog() {
  //   const dialogRef = this.dialog.open
  //   (DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  //}
}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
//   styleUrls: ['./dialog-content-example-dialog.scss']
// })
// export class DialogContentExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DesignComponent>
//   ) {}
// }