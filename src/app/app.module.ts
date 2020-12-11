import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/routes/home/home.component';
import { DesignComponent } from './components/routes/design/design.component';
import { ComputerComponent } from './components/routes/computer/computer.component';
import { ShopComponent } from './components/routes/shop/shop.component';
import { ContactComponent } from './components/routes/contact/contact.component';
import { DesignCardComponent } from './components/design-card/design-card.component';
import { DetailComponent } from './detail/detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';


import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { firebaseConfig } from './credentials';
import {PurchaseOrderService} from './purchase-order.service';

import { CalvinhacksComponent } from './components/designdetail/calvinhacks/calvinhacks.component';
import { MkainosComponent } from './components/designdetail/mkainos/mkainos.component';
import { SushiComponent } from './components/designdetail/sushi/sushi.component';
import { CardComponent } from './components/designdetail/card/card.component';
import { LinkComponent } from './components/designdetail/link/link.component';
import { TravelComponent } from './components/designdetail/travel/travel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    ComputerComponent,
    ShopComponent,
    ContactComponent,
    DetailComponent,
    DesignCardComponent,
    CalvinhacksComponent,
    MkainosComponent,
    SushiComponent,
    CardComponent,
    LinkComponent,
    TravelComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule, 
    MatGridListModule,
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
  entryComponents: [],
  providers: [PurchaseOrderService],
  bootstrap: [AppComponent, ] //only appcomponent
})
export class AppModule { }
