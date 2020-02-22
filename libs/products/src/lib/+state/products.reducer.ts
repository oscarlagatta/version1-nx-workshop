import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '@version1/products';

export const PRODUCTS_FEATURE_KEY = 'products';

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and
 *  - productsReducer
 */
export interface ProductsData {
  loading: boolean;
  products: Product[];
  error: '';
}

/**
 * Interface to the part of the Store containing ProductsState
 * and other information related to ProductsData.
 */
export interface ProductsState {
  readonly products: ProductsData;
}

export const initialState: ProductsData = {
  loading: false,
  products: [],
  error: ''
};

export function reducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true };

    case ProductsActionTypes.LoadProductsSuccess: {
      return { ...state, products: action.payload, loading: false, error: '' };
    }
    case ProductsActionTypes.LoadProductsFail: {
      return {
        ...state,
        products: null,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
