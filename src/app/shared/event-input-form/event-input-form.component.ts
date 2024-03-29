import { Component, Input } from '@angular/core';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-event-input-form',
  templateUrl: './event-input-form.component.html',
  styleUrls: ['./event-input-form.component.css'],
})
export class EventInputFormComponent {
  @Input() form: EventForm = {
    labelText: '',
    type: '',
    id: '',
    attributeName: '',
    name: '',
    attributes: [],
    errorsAttributes: [],
  };

  article = 'a';
  inputValue = '';

  constructor() {}

  ngOnChanges() {
    this.updateArticle();
    this.clearInput();
  }

  private updateArticle() {
    if(this.form.name) {
      if(['a','e','o','u','i'].includes(this.form.name.toLocaleLowerCase()[0])) {
        this.article = 'an'
      }
    }
  }

  clearInput() {
    this.inputValue = '';
  }
}
