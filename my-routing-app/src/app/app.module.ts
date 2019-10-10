import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { ChildModule } from './child.module';
import {SharedModule} from './shared.module';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";

import { RecipeService } from "./shared/recipe.service";

import {DBConnect} from "./shared/dbconnect.service"

import { HttpClientModule } from '@angular/common/http';
import { RecipepageComponent } from './recipepage/recipepage.component';
import { ShoppingpageComponent } from './shoppingpage/shoppingpage.component'


@NgModule({
  declarations: [
    RecipeBookAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeItemComponent,
    RecipepageComponent,
    ShoppingpageComponent,
  ],
  imports: [
    BrowserModule, ChildModule, SharedModule, FormsModule, HttpClientModule
  ],
  providers: [RecipeService, DBConnect],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
