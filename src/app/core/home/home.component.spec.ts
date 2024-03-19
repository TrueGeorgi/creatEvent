import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoRegComponent } from './home.component';

describe('HomeNoRegComponent', () => {
  let component: HomeNoRegComponent;
  let fixture: ComponentFixture<HomeNoRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNoRegComponent]
    });
    fixture = TestBed.createComponent(HomeNoRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
