import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasComponent } from './mapas/mapas.component';



@NgModule({
  declarations: [
    MapasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapasComponent
  ]
})
export class MapaModule { }
