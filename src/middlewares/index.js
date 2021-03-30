import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';

const enhancers = composeWithDevTools(
  applyMiddleware(

  ),
);

export default enhancers;