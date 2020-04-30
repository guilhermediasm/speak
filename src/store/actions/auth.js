export const logado = (data) => {
    return (dispath) => {
        dispath({
            type: 'LOGADO',
            payload: data
        })
    }
}

export const dadoAuth = (data) => {
    return (dispath) => {
        dispath({
            type: 'GUARDA_AUTH',
            payload: data
        })
    }
}
