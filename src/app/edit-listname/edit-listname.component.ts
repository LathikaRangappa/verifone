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
  editList: any;
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<EditListnameComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.editList = data;
  }
  updateList() {
    this.dialogRef.close(this.editList);
  }
  ngOnInit(): void {
  }

}
