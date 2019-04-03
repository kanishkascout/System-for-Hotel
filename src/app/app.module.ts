import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiningComponent } from './dining/dining.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';
import { VerifyemailComponent } from './user/verifyemail/verifyemail.component';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    LifestyleComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    WeddingsComponent,
    OffersComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    ContactComponent,
    LocationComponent,
    GalleryComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    MessageComponent,
    DiningComponent,
    SignupComponent,
    ForgetpasswordComponent,
    VerifyemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBEG1L3R7cG3vhTnvNRMxHLRve9W4Sb8i8'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents : [SigninComponent]
})
export class AppModule { }
