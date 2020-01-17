import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPictureEditComponent } from './product-picture-edit.component';

describe('ProductPictureEditComponent', () => {
  let component: ProductPictureEditComponent;
  let fixture: ComponentFixture<ProductPictureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPictureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPictureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
