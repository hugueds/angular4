import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagonNumberComponent } from './wagon-number.component';

describe('WagonNumberComponent', () => {
  let component: WagonNumberComponent;
  let fixture: ComponentFixture<WagonNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagonNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagonNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
