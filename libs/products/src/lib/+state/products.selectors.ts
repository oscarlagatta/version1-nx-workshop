import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './products.reducer';
import {
  PRODUCTS_FEATURE_KEY,
  ProductsState,
  ProductsData
} from './products.reducer';

// Lookup the 'Products' feature state managed by NgRx
const getProductsState = createFeatureSelector<ProductsData>(
  PRODUCTS_FEATURE_KEY
);
// const getProductsState = createFeatureSelector<ProductsData>('products');

const getProducts = createSelector(
  getProductsState,
  fromProduct.selectAllProducts
);

const getProductEntnites = createSelector(
  getProductsState,
  fromProduct.selectProductEntities
);

const getSelectedProductId = createSelector(
  getProductsState,
  fromProduct.getSelectedProductId
);

const getSelectedProduct = createSelector(
  getProductEntnites,
  getSelectedProductId,
  (productsDictionary, id) => {
    return productsDictionary[id];
  }
);

export const productsQuery = {
  getProducts,
  getProductEntnites,
  getSelectedProductId,
  getSelectedProduct
};
