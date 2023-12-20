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
    HomenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireStorageModule,

    provideFirebaseApp(() => initializeApp({"projectId":"angular-food-order-management","appId":"1:414132381419:web:d69001ca3a0ea322be40ae","storageBucket":"angular-food-order-management.appspot.com","apiKey":"AIzaSyCvt_czY3CcpEOXwgFydL9qjqPY8kQZw0E","authDomain":"angular-food-order-management.firebaseapp.com","messagingSenderId":"414132381419"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide:FIREBASE_OPTIONS,useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
