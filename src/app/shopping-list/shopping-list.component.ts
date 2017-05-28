import { Component, OnInit } from '@angular/core';
import {Ingridient} from "../shared/ingridient.module";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingridients : Ingridient[] = [
   new Ingridient('Potate', 10),
   new Ingridient('Bread', 7),
 ];
  constructor() { }

  ngOnInit() {
  }

}
