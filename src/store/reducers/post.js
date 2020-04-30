var initialState = {
    post: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                post: action.payload
            }

        case 'EXCLUIR_POST':
            return {
                ...state,
                post: action.payload
            }
        case 'EDITAR_POST':
            return {
                ...state,
                post: action.payload
            }

        default:
            return state
    }
}

export default reducer