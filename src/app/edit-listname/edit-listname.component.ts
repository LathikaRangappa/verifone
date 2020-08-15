import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CartActionTypes } from '../store/actions';
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-edit-listname',
  templateUrl: './edit-listname.component.html',
  styles: []
})
export class EditListnameComponent implements OnInit {
  editListName: any;
  lists: any;
  previousName: any;
  originalData: any;
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<EditListnameComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.editListName = data.name;
    this.originalData = data;
    this.previousName = data.name;
  }
  updateList() {
    this.dialogRef.close(this.editListName);
  }
  ngOnInit(): void {
  }

}
