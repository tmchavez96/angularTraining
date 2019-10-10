import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DropdownDirective} from "./shared/dropdown.directive";

import {Summary} from "./shared/summary.pipe";
import {ColorChanger} from "./shared/colorchanger.directive";

@NgModule({
  declarations: [
    Summary,
    ColorChanger,
    DropdownDirective,
  ],
  exports: [
    Summary,
    ColorChanger,
    DropdownDirective,
  ],
  imports: [
    BrowserModule
  ],
})
export class SharedModule {}
