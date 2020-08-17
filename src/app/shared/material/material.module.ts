import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  exports: [
    // Material Modules
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule, 
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MaterialModule { }
