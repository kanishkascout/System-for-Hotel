import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
 
const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'food-and-beverage', component: FoodAndBeverageComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'signin', component: SigninComponent},
  {path: '' , component: HomeComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'location' , component: LocationComponent},
  {path: 'gallery' , component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
