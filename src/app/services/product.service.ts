import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.url}/products`);
  }

  get(id: string) {
    return this.httpClient.get(`${this.url}/products/${id}`);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/products/${id}`);
  }
  save(product: Product) {
    return this.httpClient.post(`${this.url}/products`, product);
  }

  update(id: string, product: Product) {
    return this.httpClient.put<any>(`${this.url}/products/${id}`, product);
  }
}
