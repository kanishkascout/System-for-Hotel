import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatDialogConfig, MatDialogRef, MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import { ForgetpasswordComponent } from '../user/forgetpassword/forgetpassword.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(public authService: AuthService,private dialog:MatDialog, public dialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit() {
    
  }
  onSignup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    this.dialog.open(SignupComponent);
  }
  onResetPwd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    this.dialog.open(ForgetpasswordComponent);
  }
  close(){
    this.dialogRef.close();
  }


}



