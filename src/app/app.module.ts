import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [AppComponent, PlacesComponent, PlaceComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
