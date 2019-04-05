import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { SigninComponent } from 'src/app/signin/signin.component';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private dialog:MatDialog, public dialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit() {
  }
  onSignin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    this.dialog.open(SigninComponent);
  }
  close(){
    this.dialogRef.close();
  }

}
