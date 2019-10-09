import * as types from "../constants/ActionTypes";

const initialState ={
    history: [{ value: Array(2).fill(null) }],
    stepNumber: 0,
    reversed: false,
    i: -1,
    xIsNext: true,
    won: false,
};
const myReducer = (state = initialState, action)=>{
    if(action.type === types.HANDLE_CLICK)
        return state
    return state;
}
export default myReducer;