import { Component, OnInit, Inject, Injectable, Input} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-design-card',
  templateUrl: './design-card.component.html',
  styleUrls: ['./design-card.component.scss']
})
export class DesignCardComponent implements OnInit {
  @Input() path: string;
  @Input() title: string;
  @Input() textcolor: string;
  @Input() link: string;


  constructor(public dialog: MatDialog) { 
    this.path = "";
    this.title = "";
    this.textcolor = "";
    this.link ="";
  }

  ngOnInit(): void {
  }

}

