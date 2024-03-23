import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreateComponent } from './select-create.component';

describe('SelectCreateComponent', () => {
  let component: SelectCreateComponent;
  let fixture: ComponentFixture<SelectCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCreateComponent]
    });
    fixture = TestBed.createComponent(SelectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
