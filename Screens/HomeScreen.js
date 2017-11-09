// Home Screen
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';



export class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };


    render() {
        const { navigate } = this.props.navigation;
        var callus = [];
        callus.push(<Button onPress={() => navigate("About")} title="Call us" />);
        return (
            <MenuContext>
                <View style={{ flex: 1 }}>
                    <Image source={require('../img/background.jpg')} style={styles.backgroundImage} />
                    <View style={{ flex: 1, alignSelf: 'flex-start', alignContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)', minWidth: '50%' }}>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Button style={styles.button} onPress={() => navigate("ShowRoom")} title="Show Room" />
                            <Button style={styles.button} onPress={() => navigate("About")} title="About" />
                            <Button style={styles.button} onPress={() => navigate("About")} title="Call us" />
                        </View>
                    </View>

                    {/* <Menu>
                        <MenuTrigger
                            customStyles={{
                                TriggerTouchableComponent: Button,
                                triggerTouchable: { title: 'Call us' }
                            }}
                        />
                        <MenuOptions>
                            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                            <MenuOption onSelect={() => alert(`Delete`)} >
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                        </MenuOptions>
                    </Menu> */}

                </View>
            </MenuContext>
        )
    };
}

const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: 'contain', // or 'stretch',
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    button: {
        margin: 4,
    }
});