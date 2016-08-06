/**
 * Created by ljunb on 16/8/6.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Dimensions from 'Dimensions';

import Header from '../components/Header';
import MessageView from '../components/MessageView';

export default class Message extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Header title="消息列表"/>
                <MessageView
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height
                    }}
                />
            </View>
        )
    }
}