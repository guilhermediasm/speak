import { StyleSheet, Dimensions } from "react-native";



export default StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    container: {
        borderColor: colors.primaryColor,
        borderRadius: 15,
        borderWidth: 2,
        paddingHorizontal: 10,
        marginTop: 10,
        elevation: 2
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },
    infoTxt: { fontSize: 10 },
    titulo: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    linha: {
        height: 1, backgroundColor: 'black',
        marginTop: 3,
        marginRight: 20
    },
    editar: {
        flexDirection: 'row',
        marginRight: 10
    },
    postText: {
        color: 'black',
        textAlign: 'left'
    },
    divisao: {
        height: 2,
        backgroundColor: colors.primaryColor,
        marginTop: 10
    },
    vazio: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})