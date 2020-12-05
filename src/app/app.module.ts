import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { ComputerComponent } from './computer/computer.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { firebaseConfig } from './credentials';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    ComputerComponent,
    ShopComponent,
    ContactComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule, 
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
  providers: [],
  bootstrap: [AppComponent, ComputerComponent] //only appcomponent
})
export class AppModule { }
