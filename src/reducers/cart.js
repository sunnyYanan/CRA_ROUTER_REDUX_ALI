export default (state = [], payload) => {
  switch (payload.type) {
    case 'add':
      return [...state, payload.item];
    case 'empty':
      return [];
    default:
      return state;
  }
};
