// const CounterReducer=(counter=0,action)=>{
//     if(action.type === "CONUTER_PLUS"){
//         return(counter = ++counter)
//     }
//     else{
//         return counter;
//     }
    
// }
// export {CounterReducer}



const CounterReducer=(counter=0,action)=>{
    if(action.type==="CONUTER_PLUS"){
        return(counter = ++counter)
    }
    else if(action.type === "COUNTER_MINUS"){
        return(counter = --counter)
    }
    else{
        return counter
    }
}
export {CounterReducer}