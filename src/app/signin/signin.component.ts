import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NavtabsService } from '../navigation/navtabs/navtabs.service';
import { FooterService } from '../footer/footer.service';
import { HeaderService } from '../navigation/header/header.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  

  constructor(public nav:NavtabsService,public authService: AuthService,public footer:FooterService,public header:HeaderService) { }

  ngOnInit() {
    this.nav.hide();
    this.footer.hide();
    this.header.hide();
  }


}



