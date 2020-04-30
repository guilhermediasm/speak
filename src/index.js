
import 'react-native-gesture-handler';
import { StatusBar, YellowBox, AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/configureStore';
import { Provider } from "react-redux";

import Routes from './routes';
import React, { useEffect, useState } from 'react';



function App() {

    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor='#007EFF' />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>

        </>
    );
}


export default App