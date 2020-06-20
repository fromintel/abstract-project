import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { ProductsServiceStub } from '../stubs/products.service.stub';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
    providers: [
      { 
        provide: ProductsService,
        useClass: ProductsServiceStub
      } 
    ] 
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
