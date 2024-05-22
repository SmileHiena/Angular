import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.url}/category`);
  }

  get(id: string) {
    return this.httpClient.get(`${this.url}/category/${id}`);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/category/${id}`);
  }
  save(category: Category) {
    return this.httpClient.post(`${this.url}/category`, category);
  }

  update(id: string, category: Category) {
    return this.httpClient.put<any>(`${this.url}/category/${id}`, category);
  }
}
