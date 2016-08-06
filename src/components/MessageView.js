/**
 * Created by ljunb on 16/8/6.
 */
import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

let RCTMessageView = requireNativeComponent('RCTMessageView', MessageView);

export default class MessageView extends Component {
    render() {
        return <RCTMessageView {...this.props}/>
    }
}