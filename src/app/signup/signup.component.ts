import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material';
import { SigninComponent } from '../signin/signin.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService,private dialog:MatDialog, public dialogRef: MatDialogRef<SignupComponent>) { }

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
