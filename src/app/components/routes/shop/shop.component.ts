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
  goodsList: Item[] = [];
  purchaseOrder: PurchaseOrder;

  goods_name: string = "";
  img_src: string = "";
  img_id: string = "";
  price: number = 0;

  total_price: number = 0;
  purchaseOrderId: string = "first_purchase";

  constructor( private db: AngularFirestore, private poService: PurchaseOrderService ) {
    this.poService.getGoodsList().subscribe(data => {
      console.log("this is : " + data);
      this.goodsList = data;
    });
  }

  ngOnInit(): void {
  }

  plusone(index: number) {
    this.goodsList[index].quant += 1;
  }

  minusone(index: number) {
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

    // Reset goods' quantity
    // this.goodsList.forEach(goods => {
    //   goods.quant = 0;
    // });

    console.log(this.purchaseOrder);
  }

  serviceTest() {
    this.poService.addPurchaseOrderDB(this.purchaseOrderId, this.purchaseOrder)
  }
}
