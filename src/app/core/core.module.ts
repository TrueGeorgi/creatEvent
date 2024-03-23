import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateModule } from './create/create.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [CommonModule, SharedModule, FontAwesomeModule, CreateModule, SearchModule],
  providers: [],
  exports: [FooterComponent, HeaderComponent, HomeComponent],
})
export class CoreModule {}
