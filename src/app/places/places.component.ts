import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places = [];
  newPlace = false;
  constructor(private placesService: PlacesService) {
    this.placesService.getPlaces().subscribe(places => (this.places = places));
  }

  ngOnInit() {}

  handleRemove(event: any) {
    this.placesService.removePlace(event).subscribe((data: Place) => {
      this.places = this.places.filter((place: Place) => {
        return place.id !== event.id;
      });
    });
  }

  handleEdit(event: Place) {
    this.placesService.updatePlace(event).subscribe((data: Place) => {
      console.log(data);
      this.places = this.places.map((place: Place) => {
        if (place.id === place.id) {
          place = Object.assign({}, place, event);
        }
        return place;
      });
    });
  }
  addPlace() {
    this.newPlace = true;
  }
  onCreatePlace(event: Place) {
    this.placesService
      .createPlace(event)
      .subscribe((data: Place) => {
        this.placesService.getPlaces().subscribe(places => (this.places = places));
        this.newPlace = false;
      });
  }
}
