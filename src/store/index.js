import { createStore } from 'redux';

import enhancers from 'src/middlewares';
import reducer from 'src/reducers';

const store = createStore(
  reducer,
  enhancers
);

export default store;

