import { Injectable } from '@angular/core';
import {AllJobs} from './jobs';
import { Observable, of } from 'rxjs';
import {JobList} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  serviceJobs = AllJobs;

  getProductList() : Observable<JobList[]> {
    return of(this.serviceJobs);
  }

  getProductbyId(id) : Observable<any> {
    const neededProductList = this.serviceJobs.find(prodPage => prodPage.categoryID === id);
    return of (neededProductList);
  }
  constructor() { }
}
