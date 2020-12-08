import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Item {
  img_id: string;
  goods_name: string;
  img_src: string;
  quant: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  goodsList: Array<Item> = [];
  purchaseOrder: Array<Item> = [];

  goods_name: string = "";
  img_src: string = "";
  img_id: string = "";

  constructor( private db: AngularFirestore ) {
    this.db.collection<Item>('/goodsCollection').valueChanges().subscribe(res => {
      this.goodsList = res;
    });
  }

  storeGoods(){
    let randomID:string = Math.random().toString(36).substring(7)
    this.db.doc<Item>(`/goodsCollection/${randomID}`).set({
      img_id: randomID,
      img_src: this.img_src,
      goods_name: this.goods_name,
      quant: 0
    })
    console.log("store working!")

    this.img_id = "";
    this.img_src = "";
    this.goods_name = "";
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

  getPurchaseOrder() {
    this.goodsList.forEach(element => {
      if (element.quant > 0) {
        this.purchaseOrder.push(element);
        // element.quant = 0;
      } 
    });
    console.log(this.purchaseOrder)
  }
}
