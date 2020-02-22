import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
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
export interface ProductsData extends EntityState<Product> {
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

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialState: ProductsData = adapter.getInitialState({
  loading: false,
  products: [],
  error: ''
});

export function reducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true };

    case ProductsActionTypes.LoadProductsSuccess: {
      return adapter.addAll(action.payload, { ...state, error: '' });
    }

    case ProductsActionTypes.LoadProductsFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getSelectedProductId = (state: ProductsData) =>
  state.entities.getSelectedProductId;

export const {
  // select the array of product ids
  selectIds: selectProductIds,

  // select the dictionary of Products entities
  selectEntities: selectProductEntities,

  // select the array of Productss
  selectAll: selectAllProducts,

  // select the total Products count
  selectTotal: selectProductsTotal
} = adapter.getSelectors();
