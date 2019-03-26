import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlyingcausesPage } from './underlyingcauses.page';

describe('UnderlyingcausesPage', () => {
  let component: UnderlyingcausesPage;
  let fixture: ComponentFixture<UnderlyingcausesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderlyingcausesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlyingcausesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
