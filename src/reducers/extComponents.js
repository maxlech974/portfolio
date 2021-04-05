import { TOGGLE_THEME } from 'src/actions/extComponents';

const initialState = {
  theme: localStorage.getItem('theme') ?? 'light',
};

const extComponents = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.value,
      };
      default: return { ...state };
  }
};

export default extComponents;