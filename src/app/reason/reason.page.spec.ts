import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonPage } from './reason.page';

describe('ReasonPage', () => {
  let component: ReasonPage;
  let fixture: ComponentFixture<ReasonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
