import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPictureCreateComponent } from './product-picture-create.component';

describe('ProductPictureCreateComponent', () => {
  let component: ProductPictureCreateComponent;
  let fixture: ComponentFixture<ProductPictureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPictureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPictureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
