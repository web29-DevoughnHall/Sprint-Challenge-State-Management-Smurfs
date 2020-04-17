import React from 'react';
import { FETCH_SMURFS, FETCH_SUCCESS, FETCH_ERROR, ADD_SMURF } from '../actions/index'

const initialState = {
    smurfs:[],
    name:'',
    age:'',
    height:'',
    isFetching: false
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching:false,
                smurfs: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            case ADD_SMURF:
                return {
                    ...state,
        }
        default:
            return state;
    }
}