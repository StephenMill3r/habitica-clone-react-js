import {rootReducer} from './reducers';
import {configureStore} from "@reduxjs/toolkit";
//
// const persistConfig = {
//     key: 'root',
//     storage,
// };
//
// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(persistedReducer, composeEnhancer());
//
// const persistor = persistStore(store);
// export { store, persistor };


export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
