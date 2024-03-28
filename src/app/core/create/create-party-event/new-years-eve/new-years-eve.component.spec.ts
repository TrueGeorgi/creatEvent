import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearsEveComponent } from './new-years-eve.component';

describe('NewYearsEveComponent', () => {
  let component: NewYearsEveComponent;
  let fixture: ComponentFixture<NewYearsEveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewYearsEveComponent]
    });
    fixture = TestBed.createComponent(NewYearsEveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
