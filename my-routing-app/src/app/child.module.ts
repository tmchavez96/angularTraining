import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from "./shared.module"

import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

import {DropdownDirective} from "./shared/dropdown.directive";

import {AppRouting} from './app.routing';

@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent
  ],
  exports: [
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule, SharedModule, AppRouting
  ],
})
export class ChildModule {}
