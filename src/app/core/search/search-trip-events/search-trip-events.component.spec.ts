import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTripEventsComponent } from './search-trip-events.component';

describe('SearchTripEventsComponent', () => {
  let component: SearchTripEventsComponent;
  let fixture: ComponentFixture<SearchTripEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTripEventsComponent]
    });
    fixture = TestBed.createComponent(SearchTripEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
