import { Component, Input } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent {
  constructor(public navigation: NavigationService) {}

  @Input () image: string = '';
  @Input () routingName: string = '';
}
