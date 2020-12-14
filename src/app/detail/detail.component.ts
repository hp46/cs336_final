import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';

export interface Item {
  goods_name: string;
  img_src: string;
  quant: number;
  price: number;
}

export interface PurchaseOrder {
  total_price: number;
  item_list: Item[];
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [PurchaseOrderService]
})
export class DetailComponent implements OnInit {

  purchaseOrder: PurchaseOrder[] = [];

  constructor(private poService: PurchaseOrderService) {
    this.poService.getPurchaseOrder().subscribe(data => {
      console.log("this is : " + data);
      this.purchaseOrder = data;
    });
  }

  ngOnInit(): void {

  }

  getDetail() {
    console.log(this.poService.getPurchaseOrder())
  }

}
