import { Component } from '@angular/core';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-birthday-party',
  templateUrl: './birthday-party.component.html',
  styleUrls: ['./birthday-party.component.css']
})
export class BirthdayPartyComponent {
  title: string = 'Create your own Birthday-party event'
  eventForms: EventForm[] = [
 {
  labelText: 'Name your event',
  type: 'text',
  id: 'name',
  attributeName: 'name',
  name: 'event name',
  attributes: ['required'],
  errorsAttributes: ['required']
},
{
  labelText: 'Location address',
  type: 'text',
  id: 'location',
  attributeName: 'location',
  name: 'location',
  attributes: ['required'],
  errorsAttributes: []
},
]
}
