import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  quant: number;


  constructor() { 
    this.quant = 0;
  }

  ngOnInit(): void {
  }

  plusone() {
    this.quant = this.quant + 1;
  }

  minusone() {
    if (this. quant !== 0 ) {
      this.quant = this.quant - 1;
    }
  }
}
