import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakrasPage } from './chakras.page';

describe('ChakrasPage', () => {
  let component: ChakrasPage;
  let fixture: ComponentFixture<ChakrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
