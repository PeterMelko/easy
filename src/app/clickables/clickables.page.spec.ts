import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickablesPage } from './clickables.page';

describe('ClickablesPage', () => {
  let component: ClickablesPage;
  let fixture: ComponentFixture<ClickablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
