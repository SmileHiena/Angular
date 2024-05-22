import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product!: Product;
  categories!: Category[];
  id:string;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router,private CategoryService: CategoryService ) {
    this.id= route.snapshot.params['id'];
    console.log(`id is ${this.id}`);
    this.productForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'price': new FormControl(null, [Validators.required]),
      'categoryId': new FormControl(null, [Validators.required]),
      'img': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
    });
   }

  ngOnInit() {
    this.productService.get(this.id).subscribe(data=>{
    this.product = data as Product;
    });
    this.CategoryService.getAll().subscribe(data=>{
    this.categories = data as Category[];
    })
  }

  onSubmit(){
    if(this.productForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.productService.update(this.id, this.product).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/product-list']);
      });
    }
  }

}
