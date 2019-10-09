import * as types from "../constants/ActionTypes";

export const winList = () =>{
    return {
        type : types.WIN_LIST
    }
};
export const histories = () =>{
    return {
        type : types.HISTORY
    }
};
export const reset = () =>{
    return {
        type : types.RESET
    }
};
export const addWinList = (winLists) =>{
    return {
        type : types.ADD_WIN_LIST,
        winLists
    }
};

export const reverse = (history) =>{
    return{
        type : types.REVERSE,
        history
    }
};

export const setClassName = () =>{
    return{
        type : types.REVERSE
    }
};