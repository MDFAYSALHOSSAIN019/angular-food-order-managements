import { EventEmitter, Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { product } from '../model/data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private auth:AngularFirestore, private http: HttpClient, private afdb: AngularFireDatabase) { }

//   addProduct(product:product){
// product.id =this.auth.createId();
// return this.auth.collection('/product').add(product)
//   }

cartData = new EventEmitter<product[] | []>();

addProduct(data: product) {
  return this.http.post('http://localhost:3000/products', data);
}
productList() {
  return this.http.get<product[]>('http://localhost:3000/products');
}

deleteProduct(id: number) {
  return this.http.delete(`http://localhost:3000/products/${id}`);
}

getProduct(id: string) {
  return this.http.get<product>(`http://localhost:3000/products/${id}`);
}

updateProduct(product: product) {
  return this.http.put<product>(
    `http://localhost:3000/products/${product.id}`,
    product
  )
}


popularProducts() {
  return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
}

trendyProducts() {
  return this.http.get<product[]>('http://localhost:3000/products?_limit=100');
}
  
}
