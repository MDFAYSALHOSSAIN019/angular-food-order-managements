import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsService } from '../../services/products.service';
import { cart, login, product, signUp } from '../../model/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homenav',
  templateUrl: './homenav.component.html',
  styleUrl: './homenav.component.css'
})
export class HomenavComponent implements OnInit {
  menuType: string = 'default';
  sellerName:string="";
  userName:string="";
  searchResult:undefined|product[];
  cartItems=0;

  showLogin:boolean=true
  authError:string="";
  constructor(private user: UserService, private product:ProductsService,private route: Router) {}

  ngOnInit(): void {
    // this.user.userAuthReload();
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
         let sellerStore=localStorage.getItem('seller');
         let sellerData =sellerStore && JSON.parse(sellerStore)[0];
         this.sellerName=sellerData.name;
          this.menuType = 'seller';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
         else {
          this.menuType = 'default';
        }
      }
    });
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems= items.length
    })

  }

  logout() {
    // Add your logout logic here, such as clearing user data from local storage
    localStorage.removeItem('user');
    // Optionally, you may want to redirect the user to the login page or perform other actions
    // Example: this.router.navigate(['/login']);
  }

  signUp(data: signUp) {
    this.user.userSignUp(data);
    alert("data is save")
  }
  login(data: login) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
        this.localCartToRemoteCart();
      }
      
    })
  }
  openSignUp(){
    this.showLogin=false
  }
  openLogin(){
this.showLogin=true;
  }

  localCartToRemoteCart(){
   let data = localStorage.getItem('localCart');
   let user = localStorage.getItem('user');
   let userId= user && JSON.parse(user).id;
   if(data){
    let cartDataList:product[]= JSON.parse(data);
  
    cartDataList.forEach((product:product, index)=>{
      let cartData:cart={
        ...product,
        productId:product.id,
        userId
      }
      delete cartData.id;
      setTimeout(() => {
        this.product.addToCart(cartData).subscribe((result)=>{
          if(result){
            console.warn("data is stored in DB");
          }
        })
      }, 500);
      if(cartDataList.length===index+1){
        localStorage.removeItem('localCart')
      }
    })
   }

   setTimeout(() => {
    this.product.getCartList(userId)
   }, 2000);
    
  }
}
