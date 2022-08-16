import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriasComponent } from './galerias/galerias.component';



@NgModule({
  declarations: [
    GaleriasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GaleriasComponent
  ]
})
export class GaleriaModule { }
