import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinComponent } from './userin.component';

describe('UserinComponent', () => {
  let component: UserinComponent;
  let fixture: ComponentFixture<UserinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
