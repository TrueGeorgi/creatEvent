import { Component } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Event } from 'src/app/types/event';

@Component({
  selector: 'app-create-sports-event',
  templateUrl: './create-sports-event.component.html',
  styleUrls: ['./create-sports-event.component.css'],
})
export class CreateSportsEventComponent {
  constructor(public navigation: NavigationService) {}

  events: Event[] = [
    {
      name: 'Football',
      image:
        'https://www.dura-sport.co.uk/assets/js/tinymce/plugins/moxiemanager/data/files/IMAGES%20-%20FOOTBALL/FOOTBALL%20CASE%20STUDIES/Lucozade%20Canary%20Wharf/Lucozade2%20-%20done.jpg',
      routingName: 'football',
    }
  ];
}
