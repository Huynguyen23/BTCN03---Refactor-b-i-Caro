import * as types from "../constants/ActionTypes";

const initialState =[];
const myReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.WIN_LIST:
            return state;
        case types.ADD_WIN_LIST:
            return state;
        default :return state;
    }
}
export default myReducer;