import React,{Component} from 'react';
import {View } from 'react-native';
import { enableScreens } from 'react-native-screens';

import * as Font from 'expo-font';
import HomeProto from './screendesigns/HomeScreen';

import Navigator from './screendesigns/Navigator';
import BottomNavigator from './screendesigns/BottomNavigator';
import RootNavigator from './navigation/RootNavigator';


enableScreens();


 class App extends Component {
  
    render() { 
        return (
       
          <RootNavigator/>
         );
    }
}
 
export default App; 