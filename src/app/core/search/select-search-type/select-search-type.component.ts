import { Component } from '@angular/core';
import { Event } from 'src/app/types/event';

@Component({
  selector: 'app-select-search-type',
  templateUrl: './select-search-type.component.html',
  styleUrls: ['./select-search-type.component.css'],
})
export class SelectSearchTypeComponent {
  events: Event[] = [
    {
      name: 'Sports Events',
      image:
        'https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg',
      routingName: 'search-sports-events',
    },
    {
      name: 'Party Events',
      image:
        'https://i.ytimg.com/vi/hoOyg-qDK3M/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgZSgrMA8=&rs=AOn4CLBthRlrjbWQ39_aH89rc5Bz4IDdaw',
      routingName: 'search-party-events',
    },
    {
      name: 'Trips',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjtD1z3RT5ZYBNXUGS3PEzBQXVBl7jLHubw&usqp=CAU',
      routingName: 'search-trip-events',
    },
    {
      name: 'All events',
      image:
        'https://img.freepik.com/free-photo/pensive-customer-thinking-special-offer_74855-3588.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais',
      routingName: 'search-all-events',
    },
  ];
}
