import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPictureDeleteComponent } from './product-picture-delete.component';

describe('ProductPictureDeleteComponent', () => {
  let component: ProductPictureDeleteComponent;
  let fixture: ComponentFixture<ProductPictureDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPictureDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPictureDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
