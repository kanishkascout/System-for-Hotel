import { Component, OnInit  } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SigninComponent } from 'src/app/signin/signin.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private dialog : MatDialog

  constructor() { }

  ngOnInit() {
  }

  onSignin(){
    
  }
  
}
