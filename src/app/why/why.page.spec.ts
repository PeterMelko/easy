import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPage } from './why.page';

describe('WhyPage', () => {
  let component: WhyPage;
  let fixture: ComponentFixture<WhyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
