import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/Models/category';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products!: Product;
  category!: Category[];
  id:string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoryService:CategoryService ) {
    this.id= route.snapshot.params['id'];

   }

  ngOnInit() {
    this.productService.get(this.id).subscribe(data=>{
      this.products = data as Product;
      });
    this.categoryService.getAll().subscribe(data=>{
      this.category = data as Category[];
      });
  }

}
