import { Component } from '@angular/core';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {
    title: string = 'Create your own Football event'
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
  {
    labelText: 'Fee',
    type: 'number',
    id: 'fee',
    attributeName: 'fee',
    name: 'fee',
    attributes: [],
    errorsAttributes: []
  },
  {
    labelText: 'Maximum participants',
    type: 'number',
    id: 'max-num',
    attributeName: 'max-num',
    name: 'location',
    attributes: [],
    errorsAttributes: []
  }]
}
