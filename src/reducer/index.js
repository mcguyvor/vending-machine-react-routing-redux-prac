import {NUMBER_EATEN} from '../action'
import {combineReducers} from 'redux'
let numberBag = 0;
export const numberBagReducer= (state=[{numberOfBag : numberBag}],action)=>{
    console.log(action.type,state)
    switch(action.type){
        case NUMBER_EATEN :
        return  state = [{numberOfBag : ++numberBag}];
        default: return state;

    }
}
export const rootReducer = combineReducers({
    numberBag : numberBagReducer
});