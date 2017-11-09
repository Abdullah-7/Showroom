// About Screen
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

export class AboutScreen extends React.Component {
    static navigationOptions = {
        title: 'About',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={{ minHeight: 200, padding: 10, fontSize: 20, backgroundColor: 'white', textAlign: 'left', color: 'black'}}>AboutScreen</Text>
                <Text style={styles.title}>Follow us</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: 70, backgroundColor: 'white' }}>
                    <Image source={require('../img/facebook.png')} style={styles.icon} />
                    <Image source={require('../img/snapchat.png')} style={styles.icon} />
                    <Image source={require('../img/instagram.png')} style={styles.icon} />
                    <Image source={require('../img/twitter.png')} style={styles.icon} />
                </View>
                <Text style={styles.title}>Our Location</Text>
                {/* <MapView style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                /> */}
            </View>
        )
    };
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        backgroundColor: 'lightgray',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'left',
    },
    icon: {
        margin: 3,
        width: 80, 
        height: 80,
        resizeMode: 'stretch',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
})