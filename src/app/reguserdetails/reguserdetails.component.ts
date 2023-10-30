import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { AddformdataService } from '../addformdata.service';

@Component({
  selector: 'app-reguserdetails',
  templateUrl: './reguserdetails.component.html',
  styleUrls: ['./reguserdetails.component.css']
})
export class ReguserdetailsComponent {

  public userForm: FormGroup;
  submitted = false;

  constructor(private _fb: FormBuilder,public form:AddformdataService) {
    this.userForm = this._fb.group({
      username: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      address: this._fb.array([this.addAddressGroup()]),
    });
  }
  private addAddressGroup(): FormGroup {
    return this._fb.group({
      city: [],
      state: [],
      pincode: []
    });
  }
  addAddress(): void {
    this.addressArray.push(this.addAddressGroup());
  }

  get f() { return this.userForm.controls; }

  removeAddress(index: number): void {
    this.addressArray.removeAt(index);
  }

  get addressArray(): FormArray {
    return <FormArray>this.userForm.get('address');
  }
  onSubmit(){
    this.submitted = true;
    this.form.setformdata(this.userForm.value);
    //this.userForm.reset();
  }

}
