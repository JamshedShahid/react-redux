// const counterplusAction = (value)=>{
//     return(dispatch)=>{
//         dispatch({
//             type: "CONUTER_PLUS",
//             payload: value,
//         }
//         )
//     }
// }
// export {counterplusAction}


const counterplusAction= (value)=>{
    return(dispatch)=>{
        dispatch({
            type:"CONUTER_PLUS",
            payload:value
        })
    }

}

const counterminus =(value)=>{
    return(dispatch)=>{
        dispatch({
            type:"COUNTER_MINUS",
            payload:value,
        })
    }
}


export {counterplusAction,counterminus}