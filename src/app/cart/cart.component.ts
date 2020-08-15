import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as Cart from "./../store/actions";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { EditListnameComponent } from '../edit-listname/edit-listname.component';

@Component({
  selector: 'app-cart',
  template:
    `
<button  [routerLink]="['/products']" class="btn btn-info">Back to home</button>
<div *ngFor="let obj of lists;let i = index">
<input type="text" ngModel = "{{obj.name}}" value="{{obj.name}}" [disabled] = "flag">
<button *ngIf = "editbtn" (click)="edit(i,obj)" class="btn-info">Edit</button>
<div *ngFor="let obj1 of obj.value" >
    <img src="{{obj1.urls.small}}" (click)="downloadFav(obj1)" class="size">
</div>
</div>
  `,
  styles: [`
.size{
width:200px;
height:200px;
margin-bottom:10px
  }`]
})
export class CartComponent implements OnInit {

  cart: Observable<Array<any>>
  lists: any;
  finalList: any[];
  editbtn: boolean = true;
  saveBtn: boolean = false;
  flag: boolean = true;
  constructor(private store: Store<any>, private dialog: MatDialog) {

    this.store.select('cart').subscribe(data => {
      this.lists = data;
      var op = {};
      var uniqNames = [...new Set(data.map(item => item.name))]
      console.log(uniqNames)
      uniqNames.forEach((uName: string) => {
        data.map(item => {
          if (item.name === uName) {
            if (!op[uName]) op[uName] = [];
            op[uName].push(item.value)
          }
        })
        console.log("----------------------", op);
        var newOp = Object.keys(op).map(item => {
          return {
            name: item,
            value: op[item].map(opItem => opItem)
          }
        }
        );

        console.log("-----------------", newOp);
        this.lists = newOp;
      });


    })
  }


  downloadFav(obj) {
    this.toDataURL(obj, function (dataUrl) {
      console.log(dataUrl)
      var a = document.createElement("a"); //Create <a>
      a.href = dataUrl; //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      a.click();
    })
  }
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
  edit(i, obj) {
    const dialogRef = this.dialog.open(EditListnameComponent, {
      width: '500px',
      height: '200px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      obj.name = result;
      //  this.store.dispatch(new Cart.AddProduct({name:obj.name,value:obj.value}))
    });
  }
  ngOnInit() {
  }
}
