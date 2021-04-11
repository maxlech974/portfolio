import { connect } from 'react-redux';

import BurgerMenu from 'src/components/Widgets/BurgerMenu';

import { toggleMenu } from 'src/actions/widgets';

const mapStateToProps = (state) => ({
  menu: state.widgets.menu
});

const mapDispatchToProps = (dispatch) => ({
  setMenu: (value) => {
    dispatch(toggleMenu(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);