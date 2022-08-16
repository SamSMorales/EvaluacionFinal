import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { CompartidoModule } from './compartido/compartido.module';
import { ContactoModule } from './contacto/contacto.module';
import { FooterModule } from './footer/footer.module';
import { GaleriaModule } from './galeria/galeria.module';
import { MapaModule } from './mapa/mapa.module';
import { OfertaModule } from './oferta/oferta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    BannerModule,
    OfertaModule,
    GaleriaModule,
    ContactoModule,
    FooterModule,
    MapaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
