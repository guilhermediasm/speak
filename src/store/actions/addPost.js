export const publicar = (data) => {
    return (dispath) => {
        dispath({
            type: 'ADD_POST',
            payload: data
        })
    }
}
