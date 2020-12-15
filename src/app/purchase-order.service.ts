import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  goodsList: Observable<Array<Item>>;

  purchaseOrder: Observable<PurchaseOrder[]>;

  constructor(private db: AngularFirestore) { 
    this.goodsList = this.db.collection<Item>('/goodsCollection').valueChanges();
    this.purchaseOrder = this.db.collection<PurchaseOrder>('/orderCollection').valueChanges();
  }

  // Gets Goods list for shopping component
  getGoodsList() {
    console.log(this.goodsList);
    return this.goodsList;
  }

  
  addPurchaseOrderDB(goodsId: string, purchaseOrder: PurchaseOrder) {
    this.db.collection("orderCollection").doc<PurchaseOrder>(goodsId).set(purchaseOrder)

    console.log("store working!")
  }

  getPurchaseOrder(): Observable<PurchaseOrder[]> {
    return this.purchaseOrder;
  }
}