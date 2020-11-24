import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21178147Reducer from '../features/SignIn21178147/redux/reducers'
import SignIn22178146Reducer from '../features/SignIn22178146/redux/reducers'
import SignIn23178145Reducer from '../features/SignIn23178145/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21178147: SignIn21178147Reducer,
SignIn22178146: SignIn22178146Reducer,
SignIn23178145: SignIn23178145Reducer,

});