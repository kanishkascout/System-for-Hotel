import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public  email:  string  =  "";
  public  password:  string  =  "";

  constructor(private  dialog:  MatDialog, private  router:  Router) { }

  ngOnInit() {
  }
  login(){
    if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
    {
        this.router.navigate(['success']);
    }
    else
    {
        this.dialog.open(MessageComponent,{ data: {
        message:  "Error!!!"
        }});
    }
}

}
