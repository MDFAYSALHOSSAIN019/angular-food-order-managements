import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminDataViewService {

  constructor(private http:HttpClient) { }


  
   getUserData(){
    let baseUrl="http://localhost:3000/users/";
    return this.http.get(baseUrl);

   }
}
