import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminDataViewService  {

  constructor(private http:HttpClient) { }


  
   getUserData(){
    let baseUrl="http://localhost:3000/users/";
    return this.http.get(baseUrl);

   }

   getUserOrder(){
let baseUrl="http://localhost:3000/orders/";
return this.http.get(baseUrl);
   }
   getUserCart(){

    let baseUrl="http://localhost:3000/cart/";
    return this.http.get(baseUrl);

   }
}
