import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit, OnChanges {
  @Input() place;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  @Output() edit: EventEmitter<any> = new EventEmitter();

  editing = false;

  constructor() {}

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.place) {
      this.place = Object.assign({}, changes.place.currentValue);
    }
  }

  onNameChange(value: string) {
    this.place.name = value;
  }

  ngOnInit() {
    console.log(this.place);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.place);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.place);
  }
}
