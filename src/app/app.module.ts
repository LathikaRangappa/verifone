import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import {SearchServiceService} from './search-service.service';
import{HttpClientModule} from '@angular/common/http'
import { MaterialModule } from './material/material.module';

import { storeEffects } from './store/effects';
import { StoreModule } from "@ngrx/store";
import { reducer } from './store/reducer';
import { EditListnameComponent } from './edit-listname/edit-listname.component';
 import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    AddFavouriteComponent,
    EditListnameComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({cart: reducer}),
    EffectsModule.forRoot([storeEffects]),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents:[AddFavouriteComponent,EditListnameComponent],
  providers: [SearchServiceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
