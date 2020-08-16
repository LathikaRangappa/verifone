import { Action } from '@ngrx/store'


export enum CartActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    LoadItems = 'Load items from server',
    LoadSuccess = 'Load success',
    UPDATE_PRODUCT = "UPDATE_PRODUCT",
    Remove = "Remove"
}

export class AddProduct implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT
    constructor(public payload: {name:any;value:any}){}
}
export class LoadItems implements Action {
    readonly type = CartActionTypes.LoadSuccess;
  
    constructor(public payload:{name:any;value:any}) {}
  }
  export class Remove implements Action {
    readonly type = CartActionTypes.Remove;
  
    constructor(public payload:{pName:any;nName:any,arr:any}) {}
  }
  
export type CartActions = AddProduct | LoadItems | Remove;