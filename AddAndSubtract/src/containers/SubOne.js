import { connect } from 'react-redux';
import { sub } from './actions';
import { Sub } from '../components/Add';

const mapDispatchToProps = dispatch => ({ onClick: dispatch(sub()) });

const SubOne = connect({ mapDispatchToProps })(Sub);

export default SubOne;
