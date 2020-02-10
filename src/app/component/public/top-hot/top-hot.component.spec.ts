import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopHotComponent} from './top-hot.component';

describe('TopHotComponent', () => {
  let component: TopHotComponent;
  let fixture: ComponentFixture<TopHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopHotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
