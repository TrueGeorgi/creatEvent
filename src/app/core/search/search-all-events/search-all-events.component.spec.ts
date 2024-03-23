import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllEventsComponent } from './search-all-events.component';

describe('SearchAllEventsComponent', () => {
  let component: SearchAllEventsComponent;
  let fixture: ComponentFixture<SearchAllEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAllEventsComponent]
    });
    fixture = TestBed.createComponent(SearchAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
