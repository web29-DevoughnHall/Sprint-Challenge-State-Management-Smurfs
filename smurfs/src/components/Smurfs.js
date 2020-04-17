import React from 'react';
import {connect} from 'react-redux'

import { getSmurfs } from '../store/actions/index'

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <h1>{smurf.name}</h1>
                    <h3>{smurf.age}</h3>
                    <h3>{smurf.height}</h3>
                </div>
            ))}
        </div>
    )
};
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
};

export default connect(mapStateToProps, {getSmurfs})(Smurfs);

