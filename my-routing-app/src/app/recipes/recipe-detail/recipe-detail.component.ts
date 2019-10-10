import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm } from '@angular/forms'

import { DBConnect } from '../../shared/dbconnect.service'

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  loadedPost: any[] = [];

  constructor(private db:DBConnect) {}

  addRecipe(nf:NgForm){
    console.log(nf.value);
    this.db.addRecipeToDB(nf.value)
  }

  loadRecipe(){
      this.db.loadRecipesFromDB().subscribe(posts=>{
          this.loadedPost=posts
      })
      console.log(this.loadedPost)
  }

  ngOnInit() {
  }

}
