import { Component } from '@angular/core';
import { Event } from 'src/app/types/event';

@Component({
  selector: 'app-select-create',
  templateUrl: './select-create.component.html',
  styleUrls: ['./select-create.component.css'],
})
export class SelectCreateComponent {
  events: Event[] = [
    {
      name: 'Sports Event',
      image:
        'https://integralspor.com/assets/filemanager/cb8883a5730b64df2557f624a4ad465a.jpg',
      routingName: 'sports-event-create',
    },
    {
      name: 'Party Event',
      image:
        'https://as2.ftcdn.net/v2/jpg/00/91/03/83/1000_F_91038333_C6b2EeBuxMcVjJpvdtdG2dMZijoSUkDX.jpg',
      routingName: 'party-event-create',
    },
    {
      name: 'Trip',
      image:
        'https://m.media-amazon.com/images/S/abs-image-upload-na/9/AmazonStores/A1PA6795UKMFR9/eafd1dfced3832ca6ebf15aae9f86276.w1200.h630.jpg',
      routingName: 'trip-event-create',
    },
  ];
}
