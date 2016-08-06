/**
 * Created by ljunb on 16/8/6.
 */
import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CustomTabBar extends React.Component {

    static propTypes = {
        goToPage    : React.PropTypes.func,         // 跳转到对应tab的方法
        activeTab   : React.PropTypes.number,       // 当前被选中的tab下标
        tabs        : React.PropTypes.array,        // 所有tabs集合

        tabNames    : React.PropTypes.array,        // 所有tabs名称
        tabIconNames: React.PropTypes.array,        // 所有tabs图片
    };

    setAnimationValue({value}) {
        console.log(value)
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue)
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tap, i) => {
                    let color = this.props.activeTab == i ? '#059CD4' : 'gray';
                    let icon = this.props.tabIconNames[i];

                    return (
                        <TouchableOpacity
                            key={i}
                            activeOpacity={0.8}
                            style={styles.tab}
                            onPress={()=>this.props.goToPage(i)}
                        >
                            <View style={styles.tabItem}>
                                <Icon
                                    size={30}
                                    name={icon}
                                    color={color}
                                />
                                <Text style={{color: color, fontSize: 12}}>
                                    {this.props.tabNames[i]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 49 : 50,
        borderTopColor: 'rgb(242, 242, 242)',
        borderTopWidth: 0.5,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    icon: {
        width: Platform.OS === 'ios' ? 23 : 25,
        height: Platform.OS === 'ios' ? 23 : 25,
        marginBottom: 2
    }
});