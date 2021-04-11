import { TOGGLE_MENU } from 'src/actions/widgets';

const initialState = {
  menu: 'menu-box',
};

const widgets = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: action.value,
      };
      default: return { ...state };
  }
};

export default widgets;