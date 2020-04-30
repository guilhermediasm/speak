import 'react-native-gesture-handler';
import { connect } from "react-redux";
import { Button, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
            <Text>Splash!</Text>
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
