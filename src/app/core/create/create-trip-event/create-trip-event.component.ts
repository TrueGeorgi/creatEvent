import { Component } from '@angular/core';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-create-trip-event',
  templateUrl: './create-trip-event.component.html',
  styleUrls: ['./create-trip-event.component.css']
})
export class CreateTripEventComponent {
  title: string = 'Create your own Trip event'
  eventForms: EventForm[] = [
 {
  labelText: 'Destination',
  type: 'text',
  id: 'destination',
  attributeName: 'destination',
  name: 'event name',
  attributes: ['required'],
  errorsAttributes: ['required']
},
{
  labelText: 'Way of travel',
  type: 'text',
  id: 'travel',
  attributeName: 'travel',
  name: 'location',
  attributes: [],
  errorsAttributes: []
},
{
  labelText: 'Maximum participants',
  type: 'number',
  id: 'max',
  attributeName: 'max',
  name: 'location',
  attributes: [],
  errorsAttributes: []
},
{
  labelText: 'Event picture (link)',
  type: 'text',
  id: 'pic',
  attributeName: 'pic',
  name: 'location',
  attributes: [],
  errorsAttributes: []
},]
}
