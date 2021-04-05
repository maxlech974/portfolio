import { connect } from 'react-redux';

import ToggleTheme from 'src/components/Widgets/ToggleTheme';

import { toggleTheme } from 'src/actions/extComponents';

const mapStateToProps = (state) => ({
  theme: state.extComponents.theme
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (value) => {
    dispatch(toggleTheme(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);