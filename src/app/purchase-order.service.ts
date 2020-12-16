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

// Observable related info from https://stackoverflow.com/questions/47732157/using-observable-and-subscribe-in-angular-with-firebase
@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  // I am getting observable to allow other components to subscribe()
  goodsList: Observable<Array<Item>>;
  purchaseOrder: Observable<PurchaseOrder[]>;

  // Get data from the firestore DB (2 collections)
  constructor(private db: AngularFirestore) { 
    this.goodsList = this.db.collection<Item>('/goodsCollection').valueChanges();
    this.purchaseOrder = this.db.collection<PurchaseOrder>('/orderCollection').valueChanges();
  }

  // Gets Goods list for shopping component
  getGoodsList() {
    console.log(this.goodsList);
    return this.goodsList;
  }

  // put purchaseOrder into the firestore DB
  addPurchaseOrderDB(purchaseOrder: PurchaseOrder) {
    this.db.collection("orderCollection").add(purchaseOrder)
  }

  // Purchase order getter
  getPurchaseOrder(): Observable<PurchaseOrder[]> {
    return this.purchaseOrder;
  }
}