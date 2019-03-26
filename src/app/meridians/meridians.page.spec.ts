import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeridiansPage } from './meridians.page';

describe('MeridiansPage', () => {
  let component: MeridiansPage;
  let fixture: ComponentFixture<MeridiansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeridiansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeridiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
