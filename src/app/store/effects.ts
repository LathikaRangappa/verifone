import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartActionTypes } from './actions';
import { SearchServiceService } from '../search-service.service';

@Injectable()
export class storeEffects {
  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(CartActionTypes.LoadItems),
    mergeMap(() =>
      this.serv.getSearchResult(null).pipe(
        map(items => {
          return { type: CartActionTypes.LoadSuccess, payload: items };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private serv: SearchServiceService
  ) {}
}
