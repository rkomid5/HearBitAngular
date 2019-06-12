import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmidologyComponent } from './omidology.component';

describe('OmidologyComponent', () => {
  let component: OmidologyComponent;
  let fixture: ComponentFixture<OmidologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmidologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmidologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
