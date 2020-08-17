import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { AddFavouriteDialogComponent } from '../add-favourite-dialog/add-favourite-dialog.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from "@ngrx/store";
import * as Cart from "../store/actions";
@Component({
  selector: 'app-products',
  templateUrl: './search-list.component.html',
  styleUrls: ["./search-list.component.scss"]
})
export class SearchListComponent implements OnInit {

  response: any;
  lists: any;
  queryString: any;
  searchQuery: any;
  storeValues: any;
  disableBtn: boolean = false;
  constructor(private service: DataService, private store: Store<{ items: any; cart: [] }>, private dialog: MatDialog) { }

  ngOnInit() {
    this.retrieveValues();
  }
  retrieveValues() {
    this.store.select('cart').subscribe(data => {
      this.storeValues = data;
      console.log(data)
      if (data['item']) {
        if (data['item'].length != 0) {
          this.searchQuery = data['item'][0].queryString;
          this.response = data['item'][0].items;
        }
      } else {
        alert("Error Occured from the server---" + this.storeValues['error']['statusText'])
      }
    })
  }
  search(query) {
    this.store.dispatch(new Cart.LoadItems({ queryString: query }));
    this.retrieveValues();
  }
  authorPage(image) {
    if (image.user.portfolio_url != null) {
      window.open(image.user.portfolio_url);
    } else {
      alert("author details not available")
    }
  }
  addSelected(product) {
    const dialogRef = this.dialog.open(AddFavouriteDialogComponent, {
      width: '500px',
      height: '300px',
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
  trackByEmpCode(index: number, image: any): string {
    return image.id;
  }
  onhover(obj) {
    this.retrieveValues();
    if (this.storeValues['cart'].length != 0) {
      this.disableBtn = this.storeValues['cart'].forEach((item) => {
        if (JSON.stringify(item.value) === JSON.stringify(obj)) {
          return true;
        } else {
          return false;
        }
      })
    }
  }
}
