import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-listname',
  templateUrl: './edit-listname.component.html',
  styles: []
})
export class EditListnameComponent implements OnInit {
  editListName: any;
  lists: any;
  previousName: any;
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<EditListnameComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.editListName = data;
    this.previousName = data;
  }
  updateList() {

    this.store.select('cart').subscribe(data => {
      this.lists = data;
    });
    let deepClone = JSON.parse(JSON.stringify(this.lists));
    console.log(this.previousName, this.editListName, this.lists)
    var x = deepClone.filter(item => {
    var id = this.previousName;
      if(item.name == id){
      item['name'] = this.editListName;
    }
  })
console.log(x);
    this.dialogRef.close(this.lists);
  }

  changeKey(originalKey, newKey, arrayObj) {
    // var newArr = []; 
    // for (var i = 0; i < arr.length; i++) {
    //   var obj = arr[i];
    //   obj[newKey] = obj[originalKey];
    //   delete (obj[originalKey]);
    //   newArr.push(obj);
    // } return newArr;
    
  }


  ngOnInit(): void {
  }

}
