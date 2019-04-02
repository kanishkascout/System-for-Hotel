import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public  email:  string  =  "";
  public  password:  string  =  "";

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }


}



