import { Component, OnInit } from '@angular/core';
interface Item {
  orderNumber: number;
  
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
