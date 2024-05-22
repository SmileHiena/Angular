import { Product } from './../../Models/Product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    return this.productService.getAll().subscribe(data=>{
      this.products = data as Product[]
    });
  }

}
