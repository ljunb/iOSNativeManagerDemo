/**
 * Created by ljunb on 16/8/6.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.titleFont}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 64,
        backgroundColor: '#059CD4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },

    titleFont: {
        fontSize: 16
    }
})
