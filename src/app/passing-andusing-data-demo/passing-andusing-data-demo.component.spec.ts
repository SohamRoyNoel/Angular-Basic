import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingANDUsingDataDemoComponent } from './passing-andusing-data-demo.component';

describe('PassingANDUsingDataDemoComponent', () => {
  let component: PassingANDUsingDataDemoComponent;
  let fixture: ComponentFixture<PassingANDUsingDataDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingANDUsingDataDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingANDUsingDataDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
