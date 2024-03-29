import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-baby-party',
  templateUrl: './baby-party.component.html',
  styleUrls: ['./baby-party.component.css']
})
export class BabyPartyComponent {
  title: string = 'Create your own Baby party'
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
    labelText: 'Contribution per person',
    type: 'number',
    id: 'contribution',
    attributeName: 'contribution',
    name: 'fee',
    attributes: [],
    errorsAttributes: []
  },
  ]
}
