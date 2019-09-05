import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/Product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4000/api/product/products');
  }

  getProductsByCategoryId(categoryId): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:4000/api/product/productsByCategory/${categoryId}`);
  }

  searchProducts(name): Observable<any>{
    return this.http.get<any>(`http://localhost:4000/api/product/search?name=${name}`)
  }

  getProductById(productId): Observable<Product>{
    return this.http.get<Product>(`http://localhost:4000/api/product/productById/${productId}`)
  }
}
