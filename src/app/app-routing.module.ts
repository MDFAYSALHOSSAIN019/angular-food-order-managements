import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavberComponent } from './admin/navber/navber.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { CartProductComponent } from './user/cart-product/cart-product.component';
import { HomenavComponent } from './user/homenav/homenav.component';

const routes: Routes = [

  {path:'', component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'adminnav',component:NavberComponent},
  {path: 'addproduct', component: AddProductComponent },
  {path:'home-page',component:HomePageComponent},
  {path:'All-cart-item',component:CartProductComponent},
  {path:'home', component:HomenavComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
