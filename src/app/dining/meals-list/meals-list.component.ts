import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals.model';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
  meals: Meals[]=[
    new Meals('Mutton buriyani','patta rahai','https://www.ndtv.com/cooks/images/mutton-biryani-new.jpg?downsize=650:400&output-quality=70&output-format=webp')
    
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
