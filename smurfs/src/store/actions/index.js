import axios from 'axios';

export const FETCH_SMURFS= 'FETCH_SMURFS_START';
export const FETCH_SUCCESS= 'FETCH_SMURFS_SUCCESS';
export const FETCH_ERROR= 'FETCH_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const POST_SUCCESS = 'POST_SUCCESS'

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS});
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('!!!!!!!!!',res)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err);
        dispatch({ type: FETCH_ERROR, payload: 'fetching error' });
    });
}
export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF });
    axios 
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
};