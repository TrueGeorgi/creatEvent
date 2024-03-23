import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { CreateSportsEventComponent } from './create-sports-event/create-sports-event.component';
import { SelectCreateComponent } from './select-create/select-create.component';
import { CreatePartyEventComponent } from './create-party-event/create-party-event.component';
import { CreateTripEventComponent } from './create-trip-event/create-trip-event.component';



@NgModule({
    declarations: [
        CreateSportsEventComponent,
        SelectCreateComponent,
        CreatePartyEventComponent,
        CreateTripEventComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
})
export class CreateModule { }
