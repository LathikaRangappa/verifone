import { CartActionTypes, CartActions } from "./actions";
import { act } from '@ngrx/effects';

export let initialState = {
    cart:[]
}

export function reducer(state=initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: 
            return {
                cart: [...state.cart, action.payload]
            }
            case CartActionTypes.Update:
                return {
                    cart: [...action.payload.arr,
                  ...state.cart.filter(item => item.name !== action.payload.pName)]
                };
            case CartActionTypes.LoadSuccess:
                return [...state.cart, action.payload]
        default: 
            return state    
    }
}