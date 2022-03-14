// import {  } from "react-dedux/src/types";
// import { applyMiddleware ,createStore} from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./reducer/RootReducer";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/RootReducer";

// const store = createStore(rootReducer,{},applyMiddleware(thunk))
// export default store


const store = createStore(rootReducer,{},applyMiddleware(thunk))

export default store