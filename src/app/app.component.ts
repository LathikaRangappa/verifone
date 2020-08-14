import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Image Search</h1>
        <h6 class="text-center">Favorities: {{(cart | async).length}}</h6>
        <hr />
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store<any>) {}

  cart: Observable<Array<any>>

  ngOnInit() {
    this.cart = this.store.select('cart')
  }
}
