import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDirectiveTestComponent } from './ng-style-directive-test.component';

describe('NgStyleDirectiveTestComponent', () => {
  let component: NgStyleDirectiveTestComponent;
  let fixture: ComponentFixture<NgStyleDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleDirectiveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
