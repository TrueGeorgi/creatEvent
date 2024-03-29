import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSportsEventComponent } from './create-sports-event.component';
import { FootballComponent } from './football/football.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CreateSportsEventComponent,
    FootballComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class CreateSportsEventModule { }
