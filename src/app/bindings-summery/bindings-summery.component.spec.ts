import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsSummeryComponent } from './bindings-summery.component';

describe('BindingsSummeryComponent', () => {
  let component: BindingsSummeryComponent;
  let fixture: ComponentFixture<BindingsSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
