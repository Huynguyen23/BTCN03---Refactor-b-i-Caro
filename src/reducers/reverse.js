const initialState = {
    history: [],
    reversed:false
}

const myReducer = (state = initialState, action)=>{
    if(action.type === 'REVERSE'){
        const {history, reversed} = action;
        const histories = history.slice(1, history.length);
        histories.reverse();
        const value = [null,null];
        // eslint-disable-next-line object-shorthand
        histories.unshift({value : value});
        return {
            history:histories,
            reversed:!reversed
        }
    }
    return state;
}
export default myReducer;