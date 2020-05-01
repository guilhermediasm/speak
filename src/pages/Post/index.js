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
import styles from './styles'


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
        <View style={styles.container}>
            <Text style={styles.text}>Título</Text>
            <View style={styles.borderTitulo}>
                <TextInput style={styles.inputTitulo} value={titulo} onChangeText={setTitulo} />
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.info}>
                    <Text style={styles.text}>Escrever o que você deseja publicar</Text>
                    <Text>{cont}/280</Text>
                </View>
                <View style={styles.caixaPost}>
                    <TextInput style={{ marginVertical: -10 }} multiline={true} maxLength={280} value={post} onChangeText={text => changeText(text)} />
                </View>

            </View>
            <TouchableHighlight onPress={() => publicarPost()} style={styles.botaoPost}>
                <Text style={{ fontSize: 14, color: '#FFF' }} >Postar</Text>
            </TouchableHighlight>

            <Text onPress={() => cancelar()} style={styles.textOnPress} >Cancelar</Text>

            <Text onPress={() => excluir()} style={styles.textOnPress} >Excluir</Text>
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
