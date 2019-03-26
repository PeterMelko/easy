import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailsafesPage } from './failsafes.page';

describe('FailsafesPage', () => {
  let component: FailsafesPage;
  let fixture: ComponentFixture<FailsafesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailsafesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailsafesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
