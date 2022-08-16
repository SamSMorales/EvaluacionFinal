import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from './ofertas/ofertas.component';



@NgModule({
  declarations: [
    OfertasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OfertasComponent
  ]
})
export class OfertaModule { }
