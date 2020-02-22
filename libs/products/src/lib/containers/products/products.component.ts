import { Component, OnInit } from '@angular/core';
import { ProductsState } from './../../+state/products.reducer';
import { productsQuery } from './../../+state/products.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@version1/products';
import { LoadProducts } from './../../+state/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(productsQuery.getProducts));
  }
}
