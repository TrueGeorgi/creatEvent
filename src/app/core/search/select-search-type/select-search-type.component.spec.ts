import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearchTypeComponent } from './select-search-type.component';

describe('SelectSearchTypeComponent', () => {
  let component: SelectSearchTypeComponent;
  let fixture: ComponentFixture<SelectSearchTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSearchTypeComponent]
    });
    fixture = TestBed.createComponent(SelectSearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
