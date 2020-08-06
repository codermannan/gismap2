import { combineReducers } from 'redux';
import coOrdinateReducer from './coOrdinateReducer';

export default combineReducers({
  mapData: coOrdinateReducer
});
