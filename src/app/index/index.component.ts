import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { StoreService } from '../store.service';
import { UserService } from '../user.service';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  places = [];
  users;
  page;
  constructor(
    private store: StoreService,
    private userService: UserService,
    private placesService: PlacesService
  ) {
    this.store.getStreamPage().subscribe(val => {
      this.page = val;
    });
    this.users = this.userService.getUsers();
    this.placesService.getPlaces().subscribe(places => (this.places = places));
  }

  ngOnInit() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2RyYXNuZXIiLCJhIjoiY2pmZzBqZmptMjI1eTMzbWl1bGExMHppZyJ9.diPXryPOiyMuqcV4mpNOlg';
    const map = new mapboxgl.Map({
      container: 'mapcontain',
      style: 'mapbox://styles/sdrasner/cjfg0watl6rkv2sllf6hepdd5'
    });
  }
}
