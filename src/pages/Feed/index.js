import 'react-native-gesture-handler';
import { Button, View, Text, FlatList } from 'react-native';

import React, { useEffect, useState } from 'react';
import colors from '../../assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import styles from './styles'

function Feed({ navigation, listPost, perfil }) {

    const [post, setPost] = useState([])

    useEffect(() => {

        setPost(listPost)


    }, [])

    function editar(item, index) {
        navigation.navigate('Post', { item: item, index: index, screen: 'Feed' })
    }

    return (
        <View style={styles.principal}>
            {
                listPost != null ?
                    <FlatList
                        data={post}
                        style={{ paddingHorizontal: 20 }}
                        extraData={post}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <>
                                <View style={styles.container}>
                                    <View style={styles.info}>
                                        <Text style={styles.infoTxt}>{item.nomePessoa}</Text>
                                        <Text style={styles.infoTxt}>{item.dataPost}</Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={styles.titulo}>{item.tituloPost}</Text>
                                        <View style={styles.linha} />
                                        <View style={styles.editar}>
                                            <Text style={styles.postText}>{item.post}</Text>
                                            {
                                                item.nomePessoa == perfil.nome ?
                                                    <Icon onPress={() => editar(item, index)} style={{ alignSelf: 'flex-end' }} name={"edit"} size={15} color={'black'} />
                                                    :
                                                    null
                                            }
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.divisao} />
                            </>

                        }

                    />
                    :
                    <View style={styles.vazio}>
                        <Icon name={"frown-o"} size={60} color={'black'} />
                        <Text>Parece que não tem nenhum post!</Text>
                    </View>
            }

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
        logado: (value) => dispatch(logado(value))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);