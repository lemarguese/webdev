import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsListComponent } from './products-list/products-list.component';


const routes: Routes = [
  {
    path: 'jobs', component: CategoriesComponent
  },
  {
    path: 'jobs/:categoryId', component: ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
