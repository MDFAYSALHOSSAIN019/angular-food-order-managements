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
import { ViewItemComponent } from './user/view-item/view-item.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { GolobalnavComponent } from './global/golobalnav/golobalnav.component';
import { GolobalViewComponent } from './global/golobal-view/golobal-view.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { UserListComponent } from './admin/user-list/user-list.component';

const routes: Routes = [

  {path:'', component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'adminnav',component:NavberComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'All-cart-item',component:CartProductComponent},
  {path:'home', component:HomenavComponent},
  {path:'view-item',component:ViewItemComponent},
  {path:'product-details/:productId', component:ProductDetailsComponent},
  {path:'global-Nav',component:GolobalnavComponent},
  {path:'global-view',component:GolobalViewComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'my-order', component:MyOrderComponent},
  {path:'user-list',component:UserListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
