import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { ComputerComponent } from './computer/computer.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'design-component', component: DesignComponent },
  { path: 'computer-component', component: ComputerComponent},
  { path: 'shop-component', component: ShopComponent },
  { path: 'contact-component', component: ContactComponent},
  { path: 'detail-component', component: DetailComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
