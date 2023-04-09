const INIIT_STATE = {
    carts: []
};

export const cartreducer = (state=INIIT_STATE,action) => {
    switch (action.type){
          case  "ADD_CART":
            return {
                ...state,
                carts:[...state.carts, action.payload]
            }

            default : 
            return state
    }
} 