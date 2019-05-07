import { Component, OnInit } from '@angular/core';
import { WeddingsFormService } from '../weddings-form.service';
import { WeddingsForm } from '../weddings-form.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weddings-list',
  templateUrl: './weddings-list.component.html',
  styleUrls: ['./weddings-list.component.css']
})
export class WeddingsListComponent implements OnInit {

  list:WeddingsForm[];
  constructor(private service:WeddingsFormService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getWeddings().subscribe(actionArray =>{
      this.list = actionArray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }as WeddingsForm;
      })

    });
  }


  onDelete(id:string){
    if(confirm("Are you sure to delete this recoed?")){
      this.firestore.doc('weddings/'+id).delete();
      this.toastr.warning('deleted successfilly','Event');
    }
  }

}
