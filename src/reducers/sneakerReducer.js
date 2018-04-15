import * as types from '../actions/actionTypes';
export default function sneakerReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_SNEAKER:
            return [...state,
            Object.assign({}, action.sneaker)
        ];

        default:
            return state;
    }
}
