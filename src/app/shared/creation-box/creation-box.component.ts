import { Component, Input } from '@angular/core';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-creation-box',
  templateUrl: './creation-box.component.html',
  styleUrls: ['./creation-box.component.css']
})
export class CreationBoxComponent {
@Input({required: true}) forms: EventForm[] = [];
@Input({required: true}) title: string = '';
@Input() buttonName: string = 'Create';
}
