import { Component, OnInit } from '@angular/core';
import { product } from '../../model/data-type';
import { ProductsService } from '../../services/products.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

   card:boolean=false;
   table:boolean=true;


  popularProducts:undefined|product[];
  trendyProducts:undefined | product[];
   constructor(private product:ProductsService) {}
 
   ngOnInit(): void {
     this.product.popularProducts().subscribe((data)=>{
       this.popularProducts=data;
       this.loadProductList();
     })
 
     this.product.trendyProducts().subscribe((data)=>{
       this.trendyProducts=data;
     })
   }

   productList:  product[]=[];
   productMessage: undefined | string;
   icon = faTrash;
   iconEdit=faEdit;
  //  constructor(private product: ProductService) {}
 
  //  ngOnInit(): void {
  //    // this.list();
  //    this.loadProductList();
  //  }
 
   deleteProduct(id: number) {
     this.product.deleteProduct(id).subscribe((result) => {
       if (result) {
         this.productMessage = 'Product is deleted';
 
         // this.list();
       }
     });
     setTimeout(() => {
       this.productMessage = undefined;
     }, 3000);
   }
 
   // list() {
   //   this.product.productList().subscribe((result) => {
   //     if (result) {
   //       this.productList = result;
   //     }
   //   });
   // }
 
 
 
   loadProductList(): void {
     this.product.productList().subscribe(
       (result) => {
         console.warn(result);
         this.productList = Array.isArray(result) ? result : [result];
       },
       (error) => {
         console.error('Error fetching product list:', error);
       }
     );
   }


   cardbutton(){
    this.card=true;
    this.table=false;
   }

   tablebutton(){
    this.card=false;
    this.table=true;
   }


 }
   

