import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartActionTypes } from './actions';
import { DataService } from '../shared/service/data.service';

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
        catchError((error) => {
          return Observable.of({
            type: CartActionTypes.LoadFailure,
            payload: { error }
          });
        })
      )
    )
  )
  constructor(
    private actions$: Actions,
    private serv: DataService
  ) {}
}
