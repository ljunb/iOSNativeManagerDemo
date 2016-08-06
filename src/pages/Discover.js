/**
 * Created by ljunb on 16/8/6.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import ScrollTabView from 'react-native-scrollable-tab-view';

export default class Discover extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Discover</Text>
            </View>
        )
    }
}