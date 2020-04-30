const initialState = {
    logado: null,
    combaineAuth: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GUARDA_AUTH':
            return {
                ...state,
                combaineAuth: state.combaineAuth.push({ ...state.email, ...state.senha })
            }
        case 'LOGADO':
            return {
                ...state,
                logado: action.payload
            }
        default:
            return state
    }
}

export default reducer