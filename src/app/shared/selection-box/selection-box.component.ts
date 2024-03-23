import { Component, Input } from '@angular/core';
import { Event } from 'src/app/types/event';

@Component({
  selector: 'app-selection-box',
  templateUrl: './selection-box.component.html',
  styleUrls: ['./selection-box.component.css']
})
export class SelectionBoxComponent {
@Input ({required: true}) eventType: Event = {
  name: '',
  image: '',
  routingName: '' 
};
}
