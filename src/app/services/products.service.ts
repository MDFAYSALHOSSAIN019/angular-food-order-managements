import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { product } from '../model/productInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private auth:AngularFirestore, private http: HttpClient, private afdb: AngularFireDatabase) { }

  addProduct(product:product){
product.id =this.auth.createId();
return this.auth.collection('/product').add(product)
  }
  
}
