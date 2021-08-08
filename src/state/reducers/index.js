import { combineReducers } from 'redux';
import getReducer from './getReducer';
import setActiveElementReducer from './setActiveElementReducer';
import setSelectedMesh from './setSelectedMesh';

export default combineReducers({
  data: getReducer,
  activeElement: setActiveElementReducer,
  selectedMesh: setSelectedMesh,
});
