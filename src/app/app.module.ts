import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule, FIREBASE_OPTIONS} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { NavberComponent } from './admin/navber/navber.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HomePageComponent } from './user/home-page/home-page.component';
import { CartProductComponent } from './user/cart-product/cart-product.component';


import { HomenavComponent } from './user/homenav/homenav.component';
import { ViewItemComponent } from './user/view-item/view-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { GolobalnavComponent } from './global/golobalnav/golobalnav.component';
import { GolobalViewComponent } from './global/golobal-view/golobal-view.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { UserListComponent } from './admin/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavberComponent,
    AddProductComponent,
    HomePageComponent,
    CartProductComponent,
    HomenavComponent,
    ViewItemComponent,
    ProductDetailsComponent,
    GolobalnavComponent,
    GolobalViewComponent,
    UserLoginComponent,
    CheckoutComponent,
    MyOrderComponent,
    UserListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireStorageModule,
    NgbModule,
     FontAwesomeModule,
     

    provideFirebaseApp(() => initializeApp({"projectId":"angular-food-order-management","appId":"1:414132381419:web:d69001ca3a0ea322be40ae","storageBucket":"angular-food-order-management.appspot.com","apiKey":"AIzaSyCvt_czY3CcpEOXwgFydL9qjqPY8kQZw0E","authDomain":"angular-food-order-management.firebaseapp.com","messagingSenderId":"414132381419"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide:FIREBASE_OPTIONS,useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
