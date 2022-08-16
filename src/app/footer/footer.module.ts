import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootersComponent } from './footers/footers.component';



@NgModule({
  declarations: [
    FootersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FootersComponent
  ]
})
export class FooterModule { }
