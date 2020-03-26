import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotWorkComponent } from './not-work.component';

describe('NotWorkComponent', () => {
  let component: NotWorkComponent;
  let fixture: ComponentFixture<NotWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
