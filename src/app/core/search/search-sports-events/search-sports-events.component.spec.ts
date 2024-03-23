import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSportsEventsComponent } from './search-sports-events.component';

describe('SearchSportsEventsComponent', () => {
  let component: SearchSportsEventsComponent;
  let fixture: ComponentFixture<SearchSportsEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSportsEventsComponent]
    });
    fixture = TestBed.createComponent(SearchSportsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
