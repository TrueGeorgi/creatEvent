import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripEventComponent } from './create-trip-event.component';

describe('CreateTripEventComponent', () => {
  let component: CreateTripEventComponent;
  let fixture: ComponentFixture<CreateTripEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTripEventComponent]
    });
    fixture = TestBed.createComponent(CreateTripEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
