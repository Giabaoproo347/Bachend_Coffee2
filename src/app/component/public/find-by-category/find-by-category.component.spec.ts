import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByCategoryComponent } from './find-by-category.component';

describe('FindByCategoryComponent', () => {
  let component: FindByCategoryComponent;
  let fixture: ComponentFixture<FindByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
