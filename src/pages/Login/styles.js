import { StyleSheet, Dimensions } from "react-native";



export default StyleSheet.create({
    container:{ flex: 1, backgroundColor: color.primaryColor },
    inner:{
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
    subtitulo:{ color: color.cinza },
    descricao:{ fontWeight: 'bold', fontSize: 14 },
    borderEmail:{ borderWidth: 1, height: 40, borderColor: color.cinza },
    borderSenha:{ borderWidth: 1, height: 40, borderColor: color.cinza, flexDirection: 'row', justifyContent: 'space-between' },
    buttomLogin:{
        marginTop: 35,
        height: 50,
        backgroundColor: color.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    txtButtomLogin:{ fontWeight: 'bold', fontSize: 14, color: '#FFF' },
    txt:{ color: color.cinza, alignSelf: 'center' },
    txtCadastro:{

        height: 50,
        borderWidth: 1,
        borderColor: color.cinza,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})