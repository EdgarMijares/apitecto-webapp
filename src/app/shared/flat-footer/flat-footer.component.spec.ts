import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatFooterComponent } from './flat-footer.component';

describe('FlatFooterComponent', () => {
  let component: FlatFooterComponent;
  let fixture: ComponentFixture<FlatFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
