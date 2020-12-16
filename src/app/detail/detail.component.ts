import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';
import { PurchaseOrder } from '../purchase-order.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [PurchaseOrderService]
})
export class DetailComponent implements OnInit {

  purchaseOrder: PurchaseOrder[] = [];

  // Get observable from the PurchaseOrderService
  constructor(private poService: PurchaseOrderService) {
    this.poService.getPurchaseOrder().subscribe(data => {
      this.purchaseOrder = data;
    });
  }

  ngOnInit(): void {

  }
}
