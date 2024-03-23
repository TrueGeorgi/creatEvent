import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSearchTypeComponent } from './select-search-type/select-search-type.component';
import { SharedModule } from "../../shared/shared.module";
import { SearchPartyEventsComponent } from './search-party-events/search-party-events.component';
import { SearchSportsEventsComponent } from './search-sports-events/search-sports-events.component';
import { SearchTripEventsComponent } from './search-trip-events/search-trip-events.component';
import { SearchAllEventsComponent } from './search-all-events/search-all-events.component';



@NgModule({
    declarations: [
        SelectSearchTypeComponent,
        SearchPartyEventsComponent,
        SearchSportsEventsComponent,
        SearchTripEventsComponent,
        SearchAllEventsComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SearchModule { }
