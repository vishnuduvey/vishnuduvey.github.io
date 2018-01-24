import { Component, OnInit, Input } from '@angular/core';
import { RecipeList } from 'app/recipes/model/recipe-list.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: RecipeList;

  constructor() { }

  ngOnInit() {
  }

}
