import 'react-native-gesture-handler';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { connect } from "react-redux";

import React, { useEffect, useState } from 'react';
import color from '../../assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as parse from '../../components/Parse';
import { logado } from '../../store/actions/auth'

function Login({ navigation, listAuth, logado }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secure, setSecure] = useState(true)
    const [textSecure, setTextSecure] = useState('eye-slash')

    function changeStateSecure() {
        if (secure) {
            setTextSecure('eye')
            setSecure(false)
        } else {
            setTextSecure('eye-slash')
            setSecure(true)
        }
    }

    function logar() {
        if (listAuth.lenght > 0) {
            for (i = 0; i < listAuth.lenght; i++) {
                if (listAuth[i].email == email) {
                    if (listAuth[i].senha == senha) {
                        navigation.navigate('TabNavigator')
                        logado(listAuth[i])
                        parse.showToast(`Olá ${listAuth[i].nome}`);
                        break;

                    }
                }
            }
        } else {
            Alert.alert(
                "Opa!",
                "Percebi que o projeto é novo gostaria de se cadastrar?",
                [
                    {
                        text: 'agora não',
                        onPress: () => { }
                    },
                    {
                        text: 'sim',
                        onPress: () => { navigation.navigate('Cadastro') }
                    }
                ],
                { cancelable: true }
            );
        }
    }

    return (
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
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>OLÁ!</Text>
                <Text style={{ color: color.cinza }}>Faça login para continuar</Text>
                <View style={{ marginTop: 30 }}>
                    <View >
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>EMAIL</Text>
                        <View style={{ borderWidth: 1, height: 40, borderColor: color.cinza }}>
                            <TextInput value={email} onChangeText={setEmail} />
                        </View>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>SENHA</Text>
                        <View style={{ borderWidth: 1, height: 40, borderColor: color.cinza, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={{ flex: 1.5 }} value={senha} secureTextEntry={secure} onChangeText={setSenha} />
                            <Icon style={{ marginRight: 5, alignSelf: 'center' }} name={textSecure} size={30} color={'black'} onPress={() => changeStateSecure()} />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => logar()} style={{
                        marginTop: 35,
                        height: 50,
                        backgroundColor: color.primaryColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#FFF' }} >Login</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 40 }}>
                        <Text style={{ color: color.cinza, alignSelf: 'center' }}>Ainda não tem?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={{

                            height: 50,
                            borderWidth: 1,
                            borderColor: color.cinza,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }} >Crie uma conta</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );
}


const mapStateToProps = state => {
    return {
        listAuth: state.auth.combaineAuth
    }
};
const mapDispatchToProps = dispatch => (
    {
        logado: (value) => dispatch(logado(value))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);