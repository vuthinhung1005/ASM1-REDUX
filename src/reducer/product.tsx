import { produce } from "immer";


const initialState = {
    products: []
}

export const ProductReducer = (state = initialState, action: any) => {
    return produce(state, (drafState: any) => {
        switch (action.type) {
            case "fetch":
                drafState.products = action.payload
                return
            case "update":
                drafState.products = drafState.products.map((c: any) => c.id == action.payload.id ? action.payload : c)
                return
            case "delete":
                drafState.products = drafState.products.filter((c: any) => c.id !== action.payload)
                return
            case "add":
                drafState.products.push(action.payload)
                return

            default:
                return state
        }
    })
}