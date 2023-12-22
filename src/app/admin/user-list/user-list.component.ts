import { Component } from '@angular/core';
import { AdminDataViewService } from '../../services/admin-data-view.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

userData:any;

constructor(private userDataService:AdminDataViewService){}

ngOnInit(){

  this.userDataService.getUserData().subscribe(res=>{
    this.userData=res;
  })
}


}
