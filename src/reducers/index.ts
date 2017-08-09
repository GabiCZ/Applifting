
import { combineReducers } from 'redux';
import todos from './todos';
import clicks from './clicks';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  clicks,
  visibilityFilter
});

export default rootReducer;
