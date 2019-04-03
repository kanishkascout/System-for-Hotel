import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodmenuRoutingModule } from './foodmenu-routing.module';
import { FoodmenuComponent } from './foodmenu.component';
import { AddFoodmenuComponent } from './add-foodmenu/add-foodmenu.component';
import { ListFoodmenuComponent } from './list-foodmenu/list-foodmenu.component';

@NgModule({
  declarations: [FoodmenuComponent, AddFoodmenuComponent, ListFoodmenuComponent],
  imports: [
    CommonModule,
    FoodmenuRoutingModule
  ]
})
export class FoodmenuModule { }
