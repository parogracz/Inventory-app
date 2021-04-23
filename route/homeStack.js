import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home.js';
import Login from '../screens/Login.js';
import Dodawanie from '../screens/Dodawanie.js';
import Raport from '../screens/Raport.js';


const screens = {
    Home: {
        screen: Home
    },
    Dodawanie: {
        screen: Dodawanie
    },

    Login: {
        screen: Login
    },
    Raport: {
        screen: Raport
    },
}

const HomeStack = createStackNavigator(screens); 
export default createAppContainer(HomeStack);