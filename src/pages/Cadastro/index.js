import 'react-native-gesture-handler';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import color from '../../assets/colors'
import * as parse from '../../components/Parse';
import { logado, dadoAuth } from '../../store/actions/auth'


function Cadastro({ navigation, logado, dadoAuth }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')
    const [textSecure, setTextSecure] = useState('eye-slash')
    const [secure, setSecure] = useState(true)

    function cadastrar() {
        if (nome != '' && email != '' && senha != '') {
            if (senha === confirmSenha) {
                try {
                    logado({ nome: nome, email: email, senha: senha })
                    dadoAuth({ nome: nome, email: email, senha: senha })
                    navigation.navigate('TabNavigator')
                } catch (error) {
                    console.log(error)
                }

            } else {
                parse.showToast('As senhas não são iguais');
            }
        } else {
            parse.showToast('Para continuar você tem que preencher todos os campos');
        }
    }

    function cancelar() {
        navigation.navigate('Login')
    }


    function changeStateSecure() {
        if (secure) {
            setTextSecure('eye')
            setSecure(false)
        } else {
            setTextSecure('eye-slash')
            setSecure(true)
        }
    }

    return (


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex: 1, backgroundColor: color.primaryColor }}>
                <View style={{
                    height: "85%",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: "absolute",
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,
                    padding: 20,
                    backgroundColor: "#FFF"
                }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>OLÁ!</Text>
                        <Text style={{ color: color.cinza }}>Faça seu cadastro para continuar!</Text>

                        <View style={{ marginTop: 15 }}>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>NOME</Text>
                                <View style={{ borderWidth: 1, height: 40, borderColor: color.cinza }}>
                                    <TextInput value={nome} onChangeText={setNome} />
                                </View>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>EMAIL</Text>
                                <View style={{ borderWidth: 1, height: 40, borderColor: color.cinza }}>
                                    <TextInput value={email} onChangeText={setEmail} />
                                </View>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>SENHA</Text>
                                <View style={{ borderWidth: 1, height: 40, borderColor: color.cinza, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TextInput style={{ flex: 1.5 }} secureTextEntry={secure} value={senha} onChangeText={setSenha} />
                                    <Icon style={{ marginRight: 5, alignSelf: 'center' }} name={textSecure} size={30} color={'black'} onPress={() => changeStateSecure()} />
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>CONFIRMAR SENHA</Text>
                                <View style={{ borderWidth: 1, height: 40, borderColor: color.cinza }}>
                                    <TextInput secureTextEntry={secure} value={confirmSenha} onChangeText={setConfirmSenha} />
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity onPress={() => cadastrar()} style={{
                            marginTop: 20,
                            height: 50,
                            backgroundColor: color.primaryColor,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Text style={{ fontSize: 14, color: '#FFF' }} >Finalizar Cadastro</Text>
                        </TouchableOpacity>

                        <Text onPress={() => cancelar()} style={{ textAlign: 'center', marginTop: 15, marginHorizontal: 30, fontSize: 14, color: color.cinza, borderColor: color.cinza, borderBottomWidth: 1 }} >Cancelar</Text>
                    </ScrollView>
                </View>
            </View>

        </TouchableWithoutFeedback>


    );
}

const mapDispatchToProps = dispatch => (
    {
        logado: (value) => dispatch(logado(value)),
        dadoAuth: (value) => dispatch(dadoAuth(value))
    }
)

export default connect(
    null,
    mapDispatchToProps
)(Cadastro);
