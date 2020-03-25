import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductsService } from './../services/products/products.service';
import * as fromProductsActions from './../+state/products.actions';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '@version1/products';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class ProductsEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProductsActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products: Product[]) =>
            fromProductsActions.loadProductsSuccess({ products })
          ),
          catchError(error =>
            of(fromProductsActions.loadProuctsFail({ error }))
          )
        )
      )
    );
  });

  loadFilteredProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) =>
        r.payload.routerState.url.startsWith('/products')
      ),
      map(
        (r: RouterNavigationAction) =>
          r.payload.routerState.root.queryParams['category']
      ),
      mergeMap((category: string) =>
        this.productService.getProducts(category).pipe(
          map(
            (products: Product[]) =>
              fromProductsActions.loadProductsSuccess({ products })
          ),
          catchError(error => of(fromProductsActions.loadProuctsFail({error})))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
