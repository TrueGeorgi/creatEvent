import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ErrorComponent } from './core/error/error.component';
import { SelectCreateComponent } from './core/create/select-create/select-create.component';
import { CreateSportsEventComponent } from './core/create/create-sports-event/create-sports-event.component';
import { CreatePartyEventComponent } from './core/create/create-party-event/create-party-event.component';
import { CreateTripEventComponent } from './core/create/create-trip-event/create-trip-event.component';
import { SelectSearchTypeComponent } from './core/search/select-search-type/select-search-type.component';
import { SearchSportsEventsComponent } from './core/search/search-sports-events/search-sports-events.component';
import { SearchPartyEventsComponent } from './core/search/search-party-events/search-party-events.component';
import { SearchTripEventsComponent } from './core/search/search-trip-events/search-trip-events.component';
import { SearchAllEventsComponent } from './core/search/search-all-events/search-all-events.component';
import { BabyPartyComponent } from './core/create/create-party-event/baby-party/baby-party.component';
import { BirthdayPartyComponent } from './core/create/create-party-event/birthday-party/birthday-party.component';
import { NewYearsEveComponent } from './core/create/create-party-event/new-years-eve/new-years-eve.component';
import { FootballComponent } from './core/create/create-sports-event/football/football.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: SelectCreateComponent },
  { path: 'search', component: SelectSearchTypeComponent },
  { path: 'log-in', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'sports-event-create', component: CreateSportsEventComponent},
  { path: 'party-event-create', component: CreatePartyEventComponent },
  { path: 'trip-event-create', component: CreateTripEventComponent },
  { path: 'search-sports-events', component: SearchSportsEventsComponent },
  { path: 'search-party-events', component: SearchPartyEventsComponent },
  { path: 'search-trip-events', component: SearchTripEventsComponent },
  { path: 'search-all-events', component: SearchAllEventsComponent},
  { path: 'baby-party', component: BabyPartyComponent},
  { path: 'birthday-party', component: BirthdayPartyComponent},
  { path: 'new-years-eve', component: NewYearsEveComponent},
  { path: 'football', component: FootballComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
