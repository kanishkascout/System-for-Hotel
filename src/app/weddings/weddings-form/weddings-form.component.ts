import { Component, OnInit } from '@angular/core';
import { WeddingsFormService } from '../weddings-form.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weddings-form',
  templateUrl: './weddings-form.component.html',
  styleUrls: ['./weddings-form.component.css']
})
export class WeddingsFormComponent implements OnInit {

  constructor(private service : WeddingsFormService,
    private firestore:AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id: null,
      name:'',
      address:'',
      email:'',
      phoneNoL:'',
      PhoneNoM:'',
      eventName:'',
      eventType:'',
      eventTime:'',
      eventDayFrom:'',
      eventDayTo:'',
      alterDayFrom:'',
      alterDayTo:'',
      noOfPart:'',
      location:'',
      rooms:'',
      noOfRooms:'',
    }
  }

  onSubmit(form: NgForm){
    let data = form.value;
    this.firestore.collection('weddings').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully','New Event');
  }
}
