import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { AddFavouriteComponent } from '../add-favourite/add-favourite.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from "@ngrx/store";
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {

  response: any;
  lists: any;
  queryString: any;

  constructor(private service: SearchServiceService,private store:Store<{ items: any ; cart: [] }>, private dialog: MatDialog) { }
  
  ngOnInit() {
  }
  search(query) {
    this.service.getSearchResult(query).subscribe(result => {
      console.log(result);
      this.queryString = query;
      this.response = result["results"];
    })
  }
  authorPage(image) {
    if(image.user.portfolio_url != null){
    window.open(image.user.portfolio_url);
    }else{
      alert("author details not available")
    }
  }
  addSelected(i, product) {
    const dialogRef = this.dialog.open(AddFavouriteComponent, {
      width: '500px',
      height: '200px',
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}
