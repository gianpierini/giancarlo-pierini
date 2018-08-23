import { combineReducers } from 'redux';

import LanguagesReducer from './languages_reducer';

const rootReducer = combineReducers({
  languages: LanguagesReducer
});

export default rootReducer;
