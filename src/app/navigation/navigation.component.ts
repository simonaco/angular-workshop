import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { StoreService } from '../store.service';
import { BehaviorSubject } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FirstNamePipe } from '../first-name.pipe';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [FirstNamePipe],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'scale(1.1) translateZ(0)', opacity: 0 }),
        animate('0.4s ease')
      ])
    ])
  ]
})
export class NavigationComponent implements OnInit {
  selectedUser: User;
  page: string;
  constructor(private store: StoreService) {
    this.store.getStreamPage().subscribe(val => {
      this.page = val;
    });
    this.store.getSelectedUser().subscribe(val => {
      this.selectedUser = val;
    });
  }

  ngOnInit() {}
}
