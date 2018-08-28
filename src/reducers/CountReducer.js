const initialState = {
  num: 1
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case 'addCount':
      return { num: state.num + 1 };
    case 'minus':
      return { num: state.num - 1 };
    default:
      return state;
  }
};
