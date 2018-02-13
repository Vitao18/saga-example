import { connect } from 'react-redux';
import { sub } from './actions';
import Sub from '../components/Subtract';

const mapDispatchToProps = dispatch => ({ onSubClick: () => dispatch(sub()) });

const SubOne = connect(null, mapDispatchToProps)(Sub);

export default SubOne;
