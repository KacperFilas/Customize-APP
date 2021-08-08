export default (state = [], action) => {
  switch (action.type) {
    case 'SET_SELECTED_MESH':
      return action.payload;
    default:
      return state;
  }
};
