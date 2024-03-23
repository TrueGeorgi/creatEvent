import { Component, Input } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent {
  constructor(public navigation: NavigationService) {}

  @Input () name: string = '';
  @Input () routingName: string = '';
}
