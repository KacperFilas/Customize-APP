import axios from 'axios';

export const getSavedData = () => async (dispatch) => {
  const res = await axios.get('https://cutomize.herokuapp.com');

  dispatch({ type: 'GET_SAVED_DATA', payload: res.data });
};

export const setActiveElement = (element) => (dispatch) => {
  dispatch({ type: 'SET_ACTIVE_ELEMENT', payload: element });
};

export const setSelectedMesh = (obj) => (dispatch) => {
  dispatch({ type: 'SET_SELECTED_MESH', payload: obj });
};
