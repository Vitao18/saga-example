import { connect } from 'react-redux';
import { add } from './actions';
import { Add } from '../components/Add';

const mapDispatchToProps = dispatch => ({ onClick: dispatch(add()) });

const AddOne = connect({ mapDispatchToProps })(Add);

export default AddOne;
