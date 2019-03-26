import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkentityPage } from './darkentity.page';

describe('DarkentityPage', () => {
  let component: DarkentityPage;
  let fixture: ComponentFixture<DarkentityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkentityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
