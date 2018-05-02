import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SearchBar = ({ onChange, input }) => (
    <form>
        <input value={input} onChange={onChange} />
        <button type="submit">Submit</button>
    </form>
);

SearchBar.defaultProps = {
    input: '',
};

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    input: PropTypes.string,
};

const mapStateToProps = (state) => ({ input: state.input });

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(actions.changeInput(e.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);
