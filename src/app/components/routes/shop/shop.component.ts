import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PurchaseOrderService } from '../../../purchase-order.service'
import { Item } from '../../../purchase-order.service'
import { PurchaseOrder } from '../../../purchase-order.service'


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  // Available goods for purchase
  goodsList: Item[] = [];

  purchaseOrder: PurchaseOrder = {
    total_price: 0,
    item_list: []
  };

  goods_name: string = "";
  img_src: string = "";
  img_id: string = "";
  price: number = 0;

  total_price: number = 0;
  purchaseOrderId: string = "first_purchase";

  // Gets GoodsList from the PorchaseOrderService
  constructor( private db: AngularFirestore, private poService: PurchaseOrderService ) {
    this.poService.getGoodsList().subscribe(data => {
      this.goodsList = data;
    });
  }

  ngOnInit(): void {
  }

  // Adds 1 to quantity
  plusone(index: number) {
    this.goodsList[index].quant += 1;
  }

  // Subtract 1 to quantity
  minusone(index: number) {
    // Make sure quantity is zero or above
    if (this.goodsList[index].quant > 0 ) {
      this.goodsList[index].quant -= 1;
    }
  }

  createPurchaseOrder() {
    // Calculate total price
    this.goodsList.forEach(goods => {
      this.total_price += goods.price * goods.quant;
    });

    // Create purchaseOrder object
    this.purchaseOrder = {
      total_price: this.total_price,
      item_list: this.goodsList
    };
  }

  purchase() {
    this.poService.addPurchaseOrderDB(this.purchaseOrder)

    // Reset goods' quantity
    this.goodsList.forEach(goods => {
      goods.quant = 0;
    });
  }
}
