import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SigninComponent } from 'src/app/signin/signin.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { NavtabsService } from './navtabs.service';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  constructor(private dialog:MatDialog,public nav:NavtabsService) { }

  ngOnInit() {
  }

  onSignin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    this.dialog.open(SigninComponent);
  }

  onSignup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    this.dialog.open(SignupComponent);
  }

}
