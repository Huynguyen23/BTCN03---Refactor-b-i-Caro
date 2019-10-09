const initialState = false;
const myReducer=(state=initialState, action)=> {
    if(action.type === 'JUMP_TO'){
    const {stepNumber, step} = action;
    return{
        winList:[],
        stepNumber,
        won:false,
        xIsNext: (step % 2) === 0,
    }
}
return state;
}
export default myReducer;