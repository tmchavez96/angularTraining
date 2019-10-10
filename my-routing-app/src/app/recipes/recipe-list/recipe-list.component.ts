import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

import { RecipeService } from '../../shared/recipe.service';

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  curUrl
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(rs:RecipeService) {
      this.recipes = rs.getRecipes();
  }

  ngOnInit() {
  }
  
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
