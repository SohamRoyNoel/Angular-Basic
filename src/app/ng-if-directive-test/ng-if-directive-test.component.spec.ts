import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIFDirectiveTestComponent } from './ng-if-directive-test.component';

describe('NgIFDirectiveTestComponent', () => {
  let component: NgIFDirectiveTestComponent;
  let fixture: ComponentFixture<NgIFDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIFDirectiveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIFDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
