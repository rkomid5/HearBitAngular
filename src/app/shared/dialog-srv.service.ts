import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {InputFormComponent} from "../Forms/input-form/input-form.component";


@Injectable({
  providedIn: 'root'
})
export class DialogSRVService {

  constructor(private dialog: MatDialog) { }

  addDialog(): void{


    const dialogRef = this.dialog.open(InputFormComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });

  }

}
