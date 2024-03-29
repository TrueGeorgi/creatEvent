import { Component } from '@angular/core';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-new-years-eve',
  templateUrl: './new-years-eve.component.html',
  styleUrls: ['./new-years-eve.component.css']
})
export class NewYearsEveComponent {
  title: string = 'Create your own New years eve Party'
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
},]
}
