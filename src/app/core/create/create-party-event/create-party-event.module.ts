import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewYearsEveComponent } from './new-years-eve/new-years-eve.component';
import { BirthdayPartyComponent } from './birthday-party/birthday-party.component';
import { BabyPartyComponent } from './baby-party/baby-party.component';
import { CreatePartyEventComponent } from './create-party-event.component';



@NgModule({
  declarations: [
    NewYearsEveComponent,
    BirthdayPartyComponent,
    BabyPartyComponent,
    CreatePartyEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreatePartyEventModule { }
