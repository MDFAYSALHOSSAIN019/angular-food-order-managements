import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AdminDataViewService } from '../../services/admin-data-view.service';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrl: './user-order-list.component.css'
})
export class UserOrderListComponent {

orderData:any;

cartData:any;

constructor(private userDataservice:AdminDataViewService){}


ngOnInit(){

  // this.userDataservice.getUserOrder().subscribe(res=>{
  //   this.orderData=res;
  // })

  this.userDataservice.getUserCart().subscribe(res=>{
    this.cartData=res;
  })
}


}
