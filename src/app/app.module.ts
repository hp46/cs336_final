import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { ComputerComponent } from './computer/computer.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { firebaseConfig } from './credentials';

import {PurchaseOrderService} from './purchase-order.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    ComputerComponent,
    ShopComponent,
    ContactComponent,
    DetailComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule, 
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ComputerComponent],
  providers: [PurchaseOrderService],
  bootstrap: [AppComponent, ComputerComponent] //only appcomponent
})
export class AppModule { }
