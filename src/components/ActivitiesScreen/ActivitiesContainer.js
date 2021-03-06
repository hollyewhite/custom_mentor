import { connect } from 'react-redux';
// import { authenticateUser } from '../../actions/login';
import Activities from './Activities';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const ActivitiesContainer = connect(mapStateToProps, null)(Activities);

export default ActivitiesContainer;
