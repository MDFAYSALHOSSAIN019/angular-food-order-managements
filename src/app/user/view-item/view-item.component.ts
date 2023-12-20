import { Component, OnInit } from '@angular/core';
import { product } from '../../model/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent implements OnInit {


  popularProducts:undefined|product[];
  trendyProducts:undefined | product[];
   constructor(private product:ProductsService) {}
 
   ngOnInit(): void {
     this.product.popularProducts().subscribe((data)=>{
       this.popularProducts=data;
     })
 
     this.product.trendyProducts().subscribe((data)=>{
       this.trendyProducts=data;
     })
   }

   
}
