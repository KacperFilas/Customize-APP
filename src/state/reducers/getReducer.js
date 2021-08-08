export default (state = [], action) => {
  switch (action.type) {
    case 'GET_SAVED_DATA':
      return action.payload;
    default:
      return state;
  }
};
