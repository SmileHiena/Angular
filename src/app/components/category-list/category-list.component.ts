import { Category } from './../../Models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categories!: Category[];
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    return this.categoryService.getAll().subscribe(data=>{
      this.categories = data as Category[]
    });
  }

  deleteCategory(id: string){
    var result = confirm("Bạn có chắc muốn xóa ?");
    if (result){
      this.categoryService.delete(id).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/category-list'])
        .then(() => {
          window.location.reload();
        })

      })
    }
  }
}
