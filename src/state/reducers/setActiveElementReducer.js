export default (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ELEMENT':
      return action.payload;
    default:
      return state;
  }
};
