import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    ContactosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactosComponent
  ]
})
export class ContactoModule { }
