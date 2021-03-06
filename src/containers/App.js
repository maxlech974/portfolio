import { connect } from 'react-redux';

import App from 'src/components/App';

import { toggleTheme } from 'src/actions/extComponents';

const mapStateToProps = (state) => ({
  theme: state.extComponents.theme
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);