import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPictureListComponent } from './product-picture-list.component';

describe('ProductPictureListComponent', () => {
  let component: ProductPictureListComponent;
  let fixture: ComponentFixture<ProductPictureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPictureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPictureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
