import { Component, OnInit } from '@angular/core';
import { AddformdataService } from '../addformdata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  formitems:any =[];
  error:any ="";
  constructor(public formdata:AddformdataService){}
ngOnInit(){
  this.loadformdata();
}

loadformdata(){
  var formId = this.formdata.getformdata();
  if(formId.length== 0){
     this.error = "No  Items";
  } else {
    this.formitems = formId;
  }
}
removeItem(item:any){
// var removeid = item.id;
// this.cartitem.removeItem(removeid);
// window.alert('The product has been Removed!');
// this.refreshitem();
}
}
