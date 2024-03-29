import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() {}

  ngOnInit() {
  }
  @Input()
  totalLikes = 0;
  @Input()
  iLike = false;
  onclick(){
      this.iLike = !this.iLike;
      this.totalLikes += this.iLike ? 1:-1;
  }
}
