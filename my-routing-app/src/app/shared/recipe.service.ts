import { Injectable } from '@angular/core'
import { Recipe } from '../recipes/recipe';
 
 @Injectable()
 export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Ribeye','Tender and juicy steak for a king','https://material.angular.io/assets/img/examples/shiba2.jpg', new Date("11/11/2011"),new Date("11/11/2020"),500,100),
        new Recipe('Ribeye2','Tender and juicy steak for a king2','https://i.imgur.com/FRK6meX.png', new Date("11/11/2011"),new Date("11/11/2020"),50,200)    
    ];
     
     constructor() {}
     
     getRecipes() {
         return this.recipes;
     }
 }