import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import {pagesReducer} from "./reducers/pagesReducer";
import {blocksReducer} from "./reducers/blocksReducer";


const rootReducer = combineReducers({
    pages: pagesReducer,
    blocks: blocksReducer
})


export const  store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().prepend(thunk)
})


export type RootStateType = ReturnType<typeof store.getState>






// @ts-ignore
window.store = store
