import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: '#FFF', paddingHorizontal: 30 },
    text: { color: colors.cinza },
    borderTitulo: { height: 30, borderWidth: 1, borderColor: colors.cinza },
    inputTitulo:{ marginBottom: -10, fontWeight: 'bold' },
    info:{ flexDirection: 'row', justifyContent: 'space-between' },
    caixaPost:{ height: 100, borderWidth: 1, borderColor: colors.cinza },
    botaoPost:{

        marginTop: 35,
        height: 50,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textOnPress:{ textAlign: 'center', marginTop: 15, marginHorizontal: 30, fontSize: 14, color: colors.cinza, borderColor: colors.cinza, borderBottomWidth: 1 }
})