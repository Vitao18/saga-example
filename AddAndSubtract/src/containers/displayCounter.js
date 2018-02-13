import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = ({ counter }) => ({ counter });

const DisplayCounter = connect(mapStateToProps, null)(Counter);

export default DisplayCounter;
