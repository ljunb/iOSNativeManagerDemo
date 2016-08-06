/**
 * Created by ljunb on 16/8/6.
 */
import React, { Component } from 'react';

import ScrollTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';
import Main from './Main';
import Discover from './Discover';
import Message from './Message';
import Mine from './Mine';

const tabNames = ['首页', '发现', '消息', '我的'];
const tabIconNames = ['home', 'globe', 'weixin', 'user'];

export default class TabBarView extends Component {
    render() {
        return (
            <ScrollTabView
                renderTabBar={() =>
                    <CustomTabBar
                        tabNames={tabNames}
                        tabIconNames={tabIconNames}
                    />
                }
                tabBarPosition='bottom'
            >
                <Main tabLabel="Main" {...this.props}/>
                <Discover tabLabel="Discover" {...this.props}/>
                <Message tabLabel="Message" {...this.props}/>
                <Mine tabLabel="Mine" {...this.props}/>
            </ScrollTabView>
        )
    }
}