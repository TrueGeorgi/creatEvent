import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionBoxComponent } from './selection-box/selection-box.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { ImageBoxComponent } from './image-box/image-box.component';



@NgModule({
  declarations: [
    SelectionBoxComponent,
    SelectButtonComponent,
    ImageBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SelectionBoxComponent]
})
export class SharedModule { }
