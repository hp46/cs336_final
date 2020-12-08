import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from './shop/shop.component'

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  goodsList: Array<Item> = [];

  private purchaseOrder: Array<Item> = [];

  constructor(private db: AngularFirestore) { 
    this.db.collection<Item>('/goodsCollection').valueChanges().subscribe(res => {
      this.goodsList = res;
    });
  }

  getGoodsList() {
    console.log(this.goodsList);
    return this.goodsList;
  }

  addGoodsList(img_src: string, goods_name: string) {
    let randomID:string = Math.random().toString(36).substring(7)
    this.db.doc<Item>(`/goodsCollection/${randomID}`).set({
      img_id: randomID,
      img_src: img_src,
      goods_name: goods_name,
      quant: 0
    })
    console.log("store working!")
  }

  addPurchaseOrder(item: Item){
    this.purchaseOrder.push(item);
  }

  getPurchaseOrder(): Array<Item> {
    return this.purchaseOrder;
  }

  printPurchaseOrder() {
    console.log(this.purchaseOrder)
  }
}
