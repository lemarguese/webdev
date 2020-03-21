import { Injectable } from '@angular/core';
import { JobList } from './category';
import { Observable, of } from 'rxjs';
import { AllCategoriesofJobs } from './games';
import { AllJobs } from './jobs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProd(): Observable<JobList[]> {
    return of(AllJobs);
  }
  serviceWithProd = AllCategoriesofJobs;
  allCateg = AllJobs;

  constructor(){ }
  getProductsByCategoryId(id): Observable<any> {
    const neededCategory = this.serviceWithProd.find(category => category.categoryId === id);
    return of(neededCategory.products);
  }

  getFromAllProductsByCategoryId(categoryId): Observable<any> {
    const neededProducts = this.allCateg.filter(actions => actions.categoryID === categoryId);
    return of(neededProducts);
  }

  getCategories() : Observable<any> {
    return of(this.serviceWithProd);
  }

  getProductById(id): Observable<any> {
    const neededProduct = this.allCateg.find(product => product.id === id);
    return of(neededProduct)
  }
}
