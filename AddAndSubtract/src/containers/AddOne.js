import { connect } from 'react-redux';
import { add } from './actions';
import Add from '../components/Add';

const mapDispatchToProps = dispatch => ({ onAddClick: () => dispatch(add()) });

const AddOne = connect(null, mapDispatchToProps)(Add);

export default AddOne;
