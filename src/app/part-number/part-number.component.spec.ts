import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartNumberComponent } from './part-number.component';

describe('PartNumberComponent', () => {
  let component: PartNumberComponent;
  let fixture: ComponentFixture<PartNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
