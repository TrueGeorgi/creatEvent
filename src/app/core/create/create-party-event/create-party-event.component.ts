import { Component } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Event } from 'src/app/types/event';

@Component({
  selector: 'app-create-party-event',
  templateUrl: './create-party-event.component.html',
  styleUrls: ['./create-party-event.component.css'],
})
export class CreatePartyEventComponent {
  constructor(public navigation: NavigationService) {}


  events: Event[] = [
    { 
      name: 'Baby party', 
      image: 'https://media.slidesgo.com/storage/62026/conversions/0-baby-shower-thumb.jpg', 
      routingName: 'baby-party' 
    },
    {
      name: 'Birthday party',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fFCsQaFB18Ci1yWQ9_o2fs5-rs_an8rTBw&usqp=CAU',
      routingName: 'birthday-party'
    },
    {
      name: 'New years eve',
      image: 'https://www.marthastewart.com/thmb/obdT6P_4hqEIrJq6P46rtALuNDY=/400x262/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-chill-champagne-and-other-sparkling-wine-quickly-1222-2000-00533d2ac32c4782b79a342b99fd5d7a.jpg',
      routingName: 'new-years-eve'
    }
  ];
}
