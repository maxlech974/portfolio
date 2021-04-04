import { connect } from 'react-redux';

import App from 'src/components/App';

import { toggleTheme } from 'src/actions/extComponents';

const mapStateToProps = (state) => ({
  theme: state.extComponents.theme
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (themeValue) => {
    dispatch(toggleTheme(themeValue));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);