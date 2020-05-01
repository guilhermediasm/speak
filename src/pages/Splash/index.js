import 'react-native-gesture-handler';
import { connect } from "react-redux";
import { Button, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import images from '../../assets/images'
import styles from './styles'
function Splash({ navigation, listAuth, logado }) {

    useEffect(() => {
        async function fetchData() {
            try {

                if (logado == null) {
                    navigation.navigate('Login')
                } else {
                    navigation.navigate('TabNavigator')
                }
            } catch (erro) {
                console.log(erro);
            }
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Image resizeMode={"cover"} source={images.logo} />
        </View>
    );
}

const mapStateToProps = state => {
    return {
        logado: state.auth.logado
    }
};

export default connect(
    mapStateToProps,
    null
)(Splash);
