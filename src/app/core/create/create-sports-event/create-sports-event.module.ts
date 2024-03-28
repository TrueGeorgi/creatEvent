import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSportsEventComponent } from './create-sports-event.component';
import { FootballComponent } from './football/football.component';



@NgModule({
  declarations: [
    CreateSportsEventComponent,
    FootballComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateSportsEventModule { }
