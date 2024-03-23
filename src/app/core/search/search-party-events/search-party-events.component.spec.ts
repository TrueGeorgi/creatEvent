import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPartyEventsComponent } from './search-party-events.component';

describe('SearchPartyEventsComponent', () => {
  let component: SearchPartyEventsComponent;
  let fixture: ComponentFixture<SearchPartyEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPartyEventsComponent]
    });
    fixture = TestBed.createComponent(SearchPartyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
