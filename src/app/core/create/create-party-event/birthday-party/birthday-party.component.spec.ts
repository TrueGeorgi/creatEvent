import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPartyComponent } from './birthday-party.component';

describe('BirthdayPartyComponent', () => {
  let component: BirthdayPartyComponent;
  let fixture: ComponentFixture<BirthdayPartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdayPartyComponent]
    });
    fixture = TestBed.createComponent(BirthdayPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
