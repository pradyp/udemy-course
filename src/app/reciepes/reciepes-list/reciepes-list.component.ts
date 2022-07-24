import { Component, OnInit } from '@angular/core';
import { RECIEPES } from '../reciepes.mock';
import { Reciepes } from '../reciepes.model';

@Component({
  selector: 'app-reciepes-list',
  templateUrl: './reciepes-list.component.html',
  styleUrls: ['./reciepes-list.component.css']
})
export class ReciepesListComponent implements OnInit {
  // recipes: Reciepes[] = [];
  recipes = RECIEPES;

  constructor() { }

  ngOnInit(): void {
  }

}
