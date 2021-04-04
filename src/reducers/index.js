import { combineReducers } from 'redux';

import externalComponentsReducer from './extComponents';

const rootReducer = combineReducers({
  extComponents: externalComponentsReducer,
});

export default rootReducer;