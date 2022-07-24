import { Component, OnInit } from '@angular/core';
import { INGREDIENT } from 'src/shared/ingredient.mock';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients = INGREDIENT ;
  constructor() { }

  ngOnInit(): void {
  }

}
