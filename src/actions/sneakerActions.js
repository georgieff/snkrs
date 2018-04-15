import * as types from './actionTypes';

export function createSneaker(sneaker) {
    return { type: types.CREATE_SNEAKER, sneaker: sneaker };
}
