import { StyleSheet, Dimensions } from "react-native";



export default StyleSheet.create({
    container:{ flex: 1, backgroundColor: color.primaryColor },
    painel:{
        height: "85%",
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        backgroundColor: "#FFF"
    },
    ola:{ fontWeight: 'bold', fontSize: 16 },
    subTitulo:{ color: color.cinza },
    descricao:{ fontWeight: 'bold', fontSize: 14 },
    border:{ borderWidth: 1, height: 40, borderColor: color.cinza },
    borderSenha:{ borderWidth: 1, height: 40, borderColor: color.cinza, flexDirection: 'row', justifyContent: 'space-between' },
    borderConfirm:{ borderWidth: 1, height: 40, borderColor: color.cinza },
    buttomCadastrar:{
        marginTop: 20,
        height: 50,
        backgroundColor: color.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    cancelar:{ textAlign: 'center', marginTop: 15, marginHorizontal: 30, fontSize: 14, color: color.cinza, borderColor: color.cinza, borderBottomWidth: 1 }
})