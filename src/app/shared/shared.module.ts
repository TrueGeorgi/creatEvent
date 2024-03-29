import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionBoxComponent } from './selection-box/selection-box.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { EventInputFormComponent } from './event-input-form/event-input-form.component';
import { FormsModule } from '@angular/forms';
import { CreateButtonComponent } from './create-button/create-button.component';
import { CreationBoxComponent } from './creation-box/creation-box.component';



@NgModule({
  declarations: [
    SelectionBoxComponent,
    SelectButtonComponent,
    ImageBoxComponent,
    EventInputFormComponent,
    CreateButtonComponent,
    CreationBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SelectionBoxComponent, EventInputFormComponent, CreationBoxComponent, CreateButtonComponent]
})
export class SharedModule { }
