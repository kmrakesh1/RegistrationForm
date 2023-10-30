import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddformdataService {

  formdata : any = [];
  constructor() { }

  setformdata(item:any){
    this.formdata.push(item);
  }
  getformdata(){
    return this.formdata;
  }
}
