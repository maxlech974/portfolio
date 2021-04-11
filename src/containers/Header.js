import { connect } from 'react-redux';

import Header from 'src/components/Header/index';


const mapStateToProps = (state) => ({
menu: state.widgets.menu,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);