import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReguserdetailsComponent } from './reguserdetails/reguserdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RouterModule } from '@angular/router';
const routes =[
  {path:'',component:ReguserdetailsComponent},
{path:'reguser',component:ReguserdetailsComponent},
{path:'userdetails',component:UserdetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ReguserdetailsComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
