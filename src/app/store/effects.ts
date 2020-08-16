import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartActionTypes } from './actions';
import { SearchServiceService } from '../search-service.service';

@Injectable()
export class storeEffects {
  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(CartActionTypes.LoadItems),
    mergeMap((action:any) =>
      this.serv.getSearchResult(action.payload.queryString).pipe(
        map(items => {
          return { type: CartActionTypes.LoadSuccess, payload: {queryString:action.payload.queryString,items:items['results']}};
        }),
        catchError(() => EMPTY)
      )
    )
  )
  

  constructor(
    private actions$: Actions,
    private serv: SearchServiceService
  ) {}
}
