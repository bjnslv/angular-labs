import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchBtnComponent } from './catch-btn.component';

describe('CatchButtonComponent', () => {
  let component: CatchBtnComponent;
  let fixture: ComponentFixture<CatchBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});