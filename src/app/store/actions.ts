import { Action } from '@ngrx/store'


export enum CartActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    LoadItems = 'Load items from server',
    LoadSuccess = 'Load success',
    UPDATE_PRODUCT = "UPDATE_PRODUCT",
    Update = "Update"
}

export class AddProduct implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT
    constructor(public payload: {name:any;desc:any,value:any}){}
}
export class LoadItems implements Action {
    readonly type = CartActionTypes.LoadItems;
  
    constructor(public payload:{queryString:any}) {}
  }
  export class LoadSuccess implements Action {
    readonly type = CartActionTypes.LoadSuccess;
  
    constructor(public payload:any) {}
  }
  export class Update implements Action {
    readonly type = CartActionTypes.Update;
  
    constructor(public payload:{pName:any;nName:any,nDesc:any,arr:any}) {}
  }
  
export type CartActions = AddProduct | LoadItems | Update | LoadSuccess;