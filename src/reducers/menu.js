function getCur() {
  if (window.location.hash === '#/user') {
    return ['1'];
  } else if (window.location.hash === '#/home') {
    return ['2'];
  } else if (window.location.hash === '#/') {
    return ['3'];
  } else if (window.location.hash === '#/redux') {
    return ['4'];
  } else if (window.location.hash === '#/redux2') {
    return ['5'];
  }
}

const initialState = {
  selectedKey: getCur(),
  collapsed: false
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case 'changeKey':
      let result = [];
      result.push(payload.key);
      return { selectedKey: result, collapsed: state.collapsed };
    case 'changeCollapse':
      return { collapsed: !state.collapsed, selectedKey: state.selectedKey };
    default:
      return state;
  }
};
