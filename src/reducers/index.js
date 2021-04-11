import { combineReducers } from 'redux';

import externalComponentsReducer from './extComponents';
import widgetsReducer from './widgets';

const rootReducer = combineReducers({
  extComponents: externalComponentsReducer,
  widgets: widgetsReducer,
});

export default rootReducer;