import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBoxComponent } from './creation-box.component';

describe('CreationBoxComponent', () => {
  let component: CreationBoxComponent;
  let fixture: ComponentFixture<CreationBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationBoxComponent]
    });
    fixture = TestBed.createComponent(CreationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
