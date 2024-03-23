import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartyEventComponent } from './create-party-event.component';

describe('CreatePartyEventComponent', () => {
  let component: CreatePartyEventComponent;
  let fixture: ComponentFixture<CreatePartyEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePartyEventComponent]
    });
    fixture = TestBed.createComponent(CreatePartyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
