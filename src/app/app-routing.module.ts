import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { DesignComponent } from './components/routes/design/design.component';
import { ComputerComponent } from './components/routes/computer/computer.component';
import { ShopComponent } from './components/routes/shop/shop.component';
import { ContactComponent } from './components/routes/contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { CalvinhacksComponent } from './components/designdetail/calvinhacks/calvinhacks.component';
import { MkainosComponent } from './components/designdetail/mkainos/mkainos.component';
import { SushiComponent } from './components/designdetail/sushi/sushi.component';
import { CardComponent } from './components/designdetail/card/card.component';
import { LinkComponent } from './components/designdetail/link/link.component';
import { TravelComponent } from './components/designdetail/travel/travel.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'design-component', component: DesignComponent },
  { path: 'computer-component', component: ComputerComponent},
  { path: 'shop-component', component: ShopComponent },
  { path: 'contact-component', component: ContactComponent},
  { path: 'detail-component', component: DetailComponent},
  { path: 'calvinhacks', component: CalvinhacksComponent },
  { path: 'mkainos', component: MkainosComponent},
  { path: 'sushi', component: SushiComponent },
  { path: 'card', component: CardComponent},
  { path: 'link', component: LinkComponent},
  { path: 'travel', component: TravelComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
