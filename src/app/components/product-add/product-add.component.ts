import { CategoryService } from 'src/app/services/category.service';
import { Category } from './../../Models/category';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../Models/Product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  products: Product;
  categories!: Category[];

  constructor(private productService: ProductService, private router: Router, private CategoryService: CategoryService) {
    this.products = new Product();
    this.products.img = "https://img.freepik.com/free-photo/food-delicious-meal_23-2148819606.jpg?w=2000";
    this.productForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'price': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'img': new FormControl(null, [Validators.required]),
      'categoryId': new FormControl(null),
    });


   }

  ngOnInit() {
    this.CategoryService.getAll().subscribe(data=>{
      this.categories = data as Category[];
    });
  }

  onSubmit(){
    if(this.productForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.productService.save(this.products).subscribe(data=>{
        this.router.navigate(['/product-list']);
      });
    }
  }



}
