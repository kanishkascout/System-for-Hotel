import { Component, OnInit } from '@angular/core';
import { NavtabsService } from '../navigation/navtabs/navtabs.service';
import { FooterService } from '../footer/footer.service';
import { HeaderService } from '../navigation/header/header.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  constructor(public nav:NavtabsService,public header:HeaderService,public footer:FooterService) { }

  ngOnInit() {
    this.nav.show();
    this.footer.show();
    this.header.show();
  }

}
