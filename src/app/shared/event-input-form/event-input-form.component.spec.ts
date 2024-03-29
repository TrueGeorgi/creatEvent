import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInputFormComponent } from './event-input-form.component';

describe('EventInputFormComponent', () => {
  let component: EventInputFormComponent;
  let fixture: ComponentFixture<EventInputFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventInputFormComponent]
    });
    fixture = TestBed.createComponent(EventInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
