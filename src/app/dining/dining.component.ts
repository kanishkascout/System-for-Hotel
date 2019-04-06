import { Component, OnInit } from '@angular/core';
import { NavtabsService } from '../navigation/navtabs/navtabs.service';
import { HeaderService } from '../navigation/header/header.service';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.css']
})
export class DiningComponent implements OnInit {

  constructor(public nav:NavtabsService,public header:HeaderService,public footer:FooterService) { }

  ngOnInit() {
    this.nav.show();
    this.footer.show();
    this.header.show();
  }

}
