import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';
import { Item } from '../components/routes/shop/shop.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [PurchaseOrderService]
})
export class DetailComponent implements OnInit {

  purchaseOrder: Array<Item> = [];

  constructor(private poService: PurchaseOrderService) {this.purchaseOrder = this.poService.getPurchaseOrder();}

  ngOnInit(): void {

  }

  getDetail() {
    console.log(this.poService.printPurchaseOrder())
  }

}
