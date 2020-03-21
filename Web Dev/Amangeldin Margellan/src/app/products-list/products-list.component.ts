import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import {JobList} from '../category';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsonPage : any;

  constructor(private route: ActivatedRoute, private prodServ : ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }
  likeJob(likeJob : JobList) : void {
    this.selectJob = likeJob;
   this.selectJob.like_count = this.selectJob.like_count + 1; 
    // console.log(this.selectJob.like_count);
  }
  
  selectJob : JobList;
  selectedJob(job : JobList) {
    this.selectJob = job;
  }

  getProductList() {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    const currentProductList = this.prodServ.getFromAllProductsByCategoryId(id);
    currentProductList.subscribe(product => this.productsonPage = product);
  }
}
