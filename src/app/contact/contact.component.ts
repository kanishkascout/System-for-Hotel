import { Component, OnInit } from '@angular/core';
import { NavtabsService } from '../navigation/navtabs/navtabs.service';
import { HeaderService } from '../navigation/header/header.service';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  name: string;
  email: string;
  phone :BigInteger;
  subject : string;
  message: string;

  constructor(public nav:NavtabsService,public header:HeaderService,public footer:FooterService) { }

  ngOnInit() {
    this.nav.show();
    this.footer.show();
    this.header.show();
  }
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    
  }

}
