import { Component, OnInit } from '@angular/core';
import { cart, product } from '../../model/data-type';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent implements OnInit {


  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  popularProducts:undefined|product[];
  trendyProducts:undefined | product[];
   constructor(private product:ProductsService, private activeRoute:ActivatedRoute) {}
 
   ngOnInit(): void {
     this.product.popularProducts().subscribe((data)=>{
       this.popularProducts=data;
     })
 
     this.product.trendyProducts().subscribe((data)=>{
       this.trendyProducts=data;
     })

     let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
  
    if (productId) {
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;
        console.log('Product Data:', this.productData);
  
        // ... Other logic here
  
        // Subscribe to cartData after fetching productData


        let user = localStorage.getItem('user');
        
        if (user) {
          let userId = user && JSON.parse(user).id;
          this.product.getCartList(userId);
  
          this.product.cartData.subscribe((result) => {
            let item = result.filter((item: product) => productId?.toString() === item.productId?.toString());
            if (item.length) {
              this.cartData = item[0];
              this.removeCart = true;
            }
          });
        }
      });
    }
   }
   addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.product.localAddToCart(this.productData);
        this.removeCart=true
      }else{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        let cartData:cart={
          ...this.productData,
          productId:this.productData.id,
          userId
        }
        delete cartData.id;
        this.product.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.product.getCartList(userId);
           this.removeCart=true
          }
        })        
      }
      
    } 
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
this.product.removeItemFromCart(productId)
    }else{
      console.warn("cartData", this.cartData);
      
      this.cartData && this.product.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        this.product.getCartList(userId)
      })
    }
    this.removeCart=false
  }

   
}
