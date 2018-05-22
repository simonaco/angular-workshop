import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit {
  @Input() place: Place;
  rated = false;
  stars = [1, 2, 3, 4, 5];

  @Output() create: EventEmitter<Place> = new EventEmitter<Place>();
  constructor() {}

  ngOnInit() {}

  toggleRating() {
    this.rated = true;
  }

  handleSubmit(place: Place, isValid: boolean) {
    if (isValid) {
      this.create.emit(place);
    }
  }
}
