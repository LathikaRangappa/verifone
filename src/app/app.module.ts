import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchListComponent } from './search-list/search-list.component';
import { FavoritelistComponent } from './favorite-list/favorite-list.component'
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './shared/service/data.service';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './shared/material/material.module';
import { storeEffects } from './store/effects';
import { StoreModule } from "@ngrx/store";
import { reducer } from './store/reducer';
import { EditListnameDialogComponent } from './edit-listname-dialog/edit-listname-dialog.component'
import { AddFavouriteDialogComponent } from './add-favourite-dialog/add-favourite-dialog.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchListComponent
  },
  {
    path: 'favorites',
    component: FavoritelistComponent
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
    SearchListComponent,
    FavoritelistComponent,
    AddFavouriteDialogComponent,
    EditListnameDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ cart: reducer }),
    EffectsModule.forRoot([storeEffects]),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AddFavouriteDialogComponent, EditListnameDialogComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
