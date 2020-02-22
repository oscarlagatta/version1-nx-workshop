import { Component, OnInit } from '@angular/core';
import { ProductsState } from './../../+state/products.reducer';
import { productsQuery } from './../../+state/products.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@version1/products';
import { LoadProducts } from './../../+state/products.actions';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;

  constructor(private store: Store<ProductsState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(productsQuery.getProducts));
    this.selectedProduct$ = this.store.pipe(
      select(productsQuery.getSelectedProduct)
    );
  }

  updateUrlFilters(category: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { category }
    };
    this.router.navigate([`/products`], navigationExtras);
  }
}
