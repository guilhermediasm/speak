import 'react-native-gesture-handler';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import { publicar } from '../../store/actions/addPost'
import colors from '../../assets/colors';
import * as parse from '../../components/Parse';


function Post({ navigation, publicar, perfil, listPost }) {
    const [titulo, setTitulo] = useState('')
    const [post, setPost] = useState('')
    const [cont, setCont] = useState(0)

    const screen = navigation.getParam('screen');
    const item = navigation.getParam('item')
    const index = navigation.getParam('index')


    useEffect(() => {
        if (screen != undefined) {
            setCont(post.length)
            setTitulo(item.tituloPost)
            setPost(item.post)
        }

    }, [])

    function changeText(texto) {
        setCont(texto.length)
        setPost(texto)
    }

    function cancelar() {
        setCont(0)
        setPost('')
        navigation.navigate('Feed')
    }

    function excluir() {
        var p = listPost.splice(index, 1)

        publicar(p)
        setCont(0)
        setPost('')
        navigation.navigate('Feed')
    }

    async function publicarPost() {

        if (titulo != '' || post != '') {
            var p = []
            if (listPost != null) {
                var p = listPost
            }
            const date = new Date();
            p.push(
                {
                    nomePessoa: perfil.nome,
                    dataPost: `${date.getDate()}/0${date.getDay()}/${date.getFullYear()}`,
                    tituloPost: titulo,
                    post: post
                }
            )
            await publicar(p)
            setCont(0)
            setPost('')
            setTitulo('')
            navigation.navigate('Feed')
        } else {
            Alert.alert(
                "Opa!",
                "Você esqueceu de preencher alguma coisa",
                [
                    {
                        text: 'cancelar',
                        onPress: () => { navigation.navigate('Feed') }
                    },
                    {
                        text: 'corrigir',
                        onPress: () => { }
                    }
                ],
                { cancelable: true }
            ); 0
        }

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF', paddingHorizontal: 30 }}>
            <Text style={{ color: colors.cinza }}>Título</Text>
            <View style={{ height: 30, borderWidth: 1, borderColor: colors.cinza }}>
                <TextInput style={{ marginBottom: -10, fontWeight: 'bold' }} value={titulo} onChangeText={setTitulo} />
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colors.cinza }}>Escrever o que você deseja publicar</Text>
                    <Text>{cont}/280</Text>
                </View>
                <View style={{ height: 100, borderWidth: 1, borderColor: colors.cinza }}>
                    <TextInput style={{ marginVertical: -10 }} multiline={true} maxLength={280} value={post} onChangeText={text => changeText(text)} />
                </View>

            </View>
            <TouchableHighlight onPress={() => publicarPost()} style={{

                marginTop: 35,
                height: 50,
                backgroundColor: colors.primaryColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10
            }}>
                <Text style={{ fontSize: 14, color: '#FFF' }} >Postar</Text>
            </TouchableHighlight>

            <Text onPress={() => cancelar()} style={{ textAlign: 'center', marginTop: 15, marginHorizontal: 30, fontSize: 14, color: colors.cinza, borderColor: colors.cinza, borderBottomWidth: 1 }} >Cancelar</Text>

            <Text onPress={() => excluir()} style={{ textAlign: 'center', marginTop: 15, marginHorizontal: 30, fontSize: 14, color: colors.cinza, borderColor: colors.cinza, borderBottomWidth: 1 }} >Excluir</Text>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        perfil: state.auth.logado,
        listPost: state.post.post
    }
};
const mapDispatchToProps = dispatch => (
    {
        publicar: (value) => dispatch(publicar(value))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
