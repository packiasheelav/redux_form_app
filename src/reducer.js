
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer1 = combineReducers({
	form: formReducer
});

export default reducer1;