import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { PlaceComponent } from './place/place.component';
import { PlaceFormComponent } from './place-form/place-form.component';
import { GroupComponent } from './group/group.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FirstNamePipe } from './first-name.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, data: { state: 'index' } },
  { path: 'places', component: PlacesComponent, data: { state: 'place' } },
  { path: 'group', component: GroupComponent, data: { state: 'group' } }
];
@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceComponent,
    PlaceFormComponent,
    GroupComponent,
    IndexComponent,
    FooterComponent,
    NavigationComponent,
    FirstNamePipe
  ],
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
