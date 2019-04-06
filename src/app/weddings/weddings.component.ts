import { Component, OnInit } from '@angular/core';
import { NavtabsService } from '../navigation/navtabs/navtabs.service';
import { HeaderService } from '../navigation/header/header.service';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css']
})
export class WeddingsComponent implements OnInit {

  constructor(public nav:NavtabsService,public header:HeaderService,public footer:FooterService ) { }

  ngOnInit() {
    this.nav.show();
    this.footer.show();
    this.header.show();
  }
}
