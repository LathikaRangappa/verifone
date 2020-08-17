import { CartActionTypes, CartActions } from "./actions";

export let initialState = {
    cart:[],
    item:[]
}

export function reducer(state=initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
            case CartActionTypes.Update:
                return {
                    ...state,
                    cart: [...action.payload.arr,
                  ...state.cart.filter(item => item.name !== action.payload.pName)]
                };
            case CartActionTypes.LoadItems:
                return  {
                    ...state,
                    item:[{queryString:action.payload.queryString,...state.item}]
                }
            case CartActionTypes.LoadSuccess:
                return {
                    ...state,
                    item:[action.payload]
                  };
            case CartActionTypes.LoadFailure: {
                return action.payload;
            }
        default: 
            return state    
    }
}
