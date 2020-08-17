import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-listname',
  templateUrl: './edit-listname-dialog.component.html',
  styles: []
})
export class EditListnameDialogComponent implements OnInit {
  editList: any;
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<EditListnameDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.editList = data;
  }
  updateList() {
    if(this.editList.name !== '' && this.editList.desc !== ''){
      this.dialogRef.close(this.editList);
    }else {
      alert("Input fields cannot be empty")
    }
  }
  ngOnInit(): void {
  }

}
