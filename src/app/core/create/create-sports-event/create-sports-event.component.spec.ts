import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportsEventComponent } from './create-sports-event.component';

describe('CreateSportsEventComponent', () => {
  let component: CreateSportsEventComponent;
  let fixture: ComponentFixture<CreateSportsEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSportsEventComponent]
    });
    fixture = TestBed.createComponent(CreateSportsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
