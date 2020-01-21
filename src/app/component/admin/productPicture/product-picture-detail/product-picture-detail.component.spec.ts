import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPictureDetailComponent } from './product-picture-detail.component';

describe('ProductPictureDetailComponent', () => {
  let component: ProductPictureDetailComponent;
  let fixture: ComponentFixture<ProductPictureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPictureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPictureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
