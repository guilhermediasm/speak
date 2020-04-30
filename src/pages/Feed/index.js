import 'react-native-gesture-handler';
import { Button, View, Text, FlatList } from 'react-native';

import React, { useEffect, useState } from 'react';
import colors from '../../assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";


function Feed({ navigation, listPost, perfil }) {

    const [post, setPost] = useState([])

    useEffect(() => {

        setPost(listPost)


    }, [])

    function editar(item, index) {
        navigation.navigate('Post', { item: item, index: index, screen: 'Feed' })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            {
                listPost != null ?
                    <FlatList
                        data={post}
                        style={{ paddingHorizontal: 20 }}
                        extraData={post}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <>
                                <View style={{ borderColor: colors.primaryColor, borderRadius: 15, borderWidth: 2, paddingHorizontal: 10, marginTop: 10, elevation: 2 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                        <Text style={{ fontSize: 10 }}>{item.nomePessoa}</Text>
                                        <Text style={{ fontSize: 10 }}>{item.dataPost}</Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold', }}>{item.tituloPost}</Text>
                                        <View style={{ height: 1, backgroundColor: 'black', marginTop: 3, marginRight: 20 }} />
                                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                            <Text style={{ color: 'black', textAlign: 'left' }}>{item.post}</Text>
                                            {
                                                item.nomePessoa == perfil.nome ?
                                                    <Icon onPress={() => editar(item, index)} style={{ alignSelf: 'flex-end' }} name={"edit"} size={15} color={'black'} />
                                                    :
                                                    null
                                            }
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 2, backgroundColor: colors.primaryColor, marginTop: 10 }} />
                            </>

                        }

                    />
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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