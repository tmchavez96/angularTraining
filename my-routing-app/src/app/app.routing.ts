import {RouterModule} from '@angular/router'
import {RecipepageComponent} from './recipepage/recipepage.component'
import {ShoppingpageComponent} from './shoppingpage/shoppingpage.component'

export const AppRouting =RouterModule.forRoot([
{path:'recipesPage',component:RecipepageComponent},
{path:'shoppingPage',component:ShoppingpageComponent},
])