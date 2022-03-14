// import { combineReducers } from "redux";
// import { CounterReducer } from "./CounterReducer";

import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

// const rootReducer = combineReducers({
//     CounterReducer : CounterReducer,
// })
// export {rootReducer}

const rootReducer = combineReducers({
    CounterReducer: CounterReducer
})
export{rootReducer}