export default function sneakerReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_SNEAKER':
            return [...state,
            Object.assign({}, action.sneaker)
        ];

        default:
            return state;
    }
}
