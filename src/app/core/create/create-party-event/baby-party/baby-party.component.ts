import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-baby-party',
  templateUrl: './baby-party.component.html',
  styleUrls: ['./baby-party.component.css']
})
export class BabyPartyComponent {
  constructor(private pf: FormBuilder) {}
}
