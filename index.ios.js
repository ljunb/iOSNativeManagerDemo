/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    View,
} from 'react-native';
import Root from './src/pages/TabBarView';

class iOSNativeManagerDemo extends Component {
    render() {
        const defaultName = 'Root';
        const defaultComponent = Root;
        return (
            <View style={{ flex: 1 }}>
                <Navigator
                    initialRoute={{ name: defaultName, component: defaultComponent }}
                    configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
                    renderScene={
                        (route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }
                    }/>
            </View>
        )
    }
}
AppRegistry.registerComponent('iOSNativeManagerDemo', () => iOSNativeManagerDemo);
