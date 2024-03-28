import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { SelectCreateComponent } from './select-create/select-create.component';
import { CreatePartyEventModule } from './create-party-event/create-party-event.module';
import { CreateTripEventComponent } from './create-trip-event/create-trip-event.component';
import { CreateSportsEventModule } from './create-sports-event/create-sports-event.module';



@NgModule({
    declarations: [
        SelectCreateComponent,
        CreateTripEventComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CreatePartyEventModule,
        CreateSportsEventModule
    ],
})
export class CreateModule { }
