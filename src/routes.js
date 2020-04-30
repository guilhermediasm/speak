import React from 'react'
import { View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import color from './assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome';

//PAGES
import Splash from './pages/Splash'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Feed from './pages/Feed'
import Post from './pages/Post'
//import Config from './pages/Config


const TabNavigator = createAppContainer(createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name="comments" size={35} color={tintColor} />
        }
    },
    Post: {
        screen: Post,
        navigationOptions: {
            title: 'Post',
            tabBarIcon: ({ tintColor }) => <Icon name="comment" size={35} color={tintColor} />
        }
    },

}, {
    defaultNavigationOptions: {
        tabBarLabel: () => null,

        tabBarOptions: {
            activeTintColor: '#3087E0',
            inactiveTintColor: 'black',
            style: {
                borderTopColor: 'transparent'
            }
        }
    },
}));

const AppNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Splash',

        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',

        }
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: {
            title: 'Cadastro',

        }
    },
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            title: 'TabNavigator',

        }
    }

}, {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
        headerShown: false
    }
});



export default createAppContainer(AppNavigator);