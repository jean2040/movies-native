import {combineReducers} from 'redux';
import {DATA_AVAILABLE, SELECT_ITEM} from "../actions";

let dataState = { data: [] , loading:true, selectedItem: null};

const dataReducer = (state = dataState, action) => {
    switch (action.type){
        case 'DATA_AVAILABLE':
            state = Object.assign({}, state, {data: action.data, loading:false});
            return state;
        case 'SELECT_ITEM':
            console.log('reducer' + action.item);
            return {
                ...state,
                selectedItem: action.item
            };
        case 'DESELECT_ITEM':
            return{
                ...state,
                selectedItem: null
            };



        default:
            return state;
    }
};

//combining reducers
const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;
