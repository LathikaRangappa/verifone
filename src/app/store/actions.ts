import { Action } from '@ngrx/store'


export enum CartActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    LoadItems = 'Load items from server',
    LoadSuccess = 'Load success'
}

export class AddProduct implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT
    constructor(public payload: {name:any;value:any}){}
}
export class LoadItems implements Action {
    readonly type = CartActionTypes.LoadSuccess;
  
    constructor(public payload:{name:any;value:any}) {}
  }
  
export type CartActions = AddProduct | LoadItems ;