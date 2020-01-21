import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByPromotionComponent } from './find-by-promotion.component';

describe('FindByPromotionComponent', () => {
  let component: FindByPromotionComponent;
  let fixture: ComponentFixture<FindByPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
