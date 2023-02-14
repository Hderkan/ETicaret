import { Product } from './create_product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
