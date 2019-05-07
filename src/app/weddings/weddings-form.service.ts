import { Injectable } from '@angular/core';
import { WeddingsForm } from './weddings-form.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WeddingsFormService {
  formData : WeddingsForm

  constructor(private firestore:AngularFirestore) { }

  getWeddings(){
    return this.firestore.collection('weddings').snapshotChanges();
  }
  
}

