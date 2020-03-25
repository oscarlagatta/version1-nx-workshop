import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../data-models/product';

export enum ProductsActionTypes {
  LoadProducts = '[Products Page] Load Products',
  LoadProductsSuccess = '[Products API] Load Products Success',
  LoadProductsFail = '[Products API] LoadProducts Fail'
}

export const loadProducts = createAction('[Products Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProuctsFail = createAction(
  '[Products API] LoadProducts Fail',
  props<{ error: any }>()
);
