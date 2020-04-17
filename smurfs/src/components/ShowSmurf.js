import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../store/actions/index';

const ShowSmurf = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getSmurfs();
    }

    return (
        <>
            {props.isFetchingData ? (
                <div>Loading your smurf village!</div>
            ) : (
                <button onClick={handleGetData}>Show village</button>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getSmurfs }
)(ShowSmurf); 