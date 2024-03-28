import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyPartyComponent } from './baby-party.component';

describe('BabyPartyComponent', () => {
  let component: BabyPartyComponent;
  let fixture: ComponentFixture<BabyPartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabyPartyComponent]
    });
    fixture = TestBed.createComponent(BabyPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
