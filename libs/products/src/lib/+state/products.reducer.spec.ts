import { ProductsLoaded } from './products.actions';
import {
  ProductsState,
  Entity,
  initialState,
  reducer
} from './products.reducer';

describe('Products Reducer', () => {
  const getProductsId = it => it['id'];
  let createProducts;

  beforeEach(() => {
    createProducts = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Products actions ', () => {
    it('should return set the list of known Products', () => {
      const productss = [
        createProducts('PRODUCT-AAA'),
        createProducts('PRODUCT-zzz')
      ];
      const action = new ProductsLoaded(productss);
      const result: ProductsState = reducer(initialState, action);
      const selId: string = getProductsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
