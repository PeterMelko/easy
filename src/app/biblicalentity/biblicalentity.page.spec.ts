import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblicalentityPage } from './biblicalentity.page';

describe('BiblicalentityPage', () => {
  let component: BiblicalentityPage;
  let fixture: ComponentFixture<BiblicalentityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblicalentityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblicalentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
