// Show Room Screen
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,
    TouchableHighlight,
    Alert,
    I18nManager,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NumberFormat from 'react-number-format';

I18nManager.forceRTL(true);

export class ShowRoomScreen extends React.Component {

    static navigationOptions = {
        title: 'Show Room',
    };

    render() {
        const { navigate } = this.props.navigation;
        let pic = {
            uri: 'https://auto.ndtvimg.com/car-images/medium/ferrari/gtc4lusso/ferrari-gtc4lusso.jpg'
        };
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { id: 1, image: pic, key: "car 1 car 1 car 1 car 1 car 1 car 1 car 1", price: 150000 },
                        { id: 2, image: pic, key: "car 2", price: 250 },
                        { id: 3, image: pic, key: "car 3", price: 350 },
                    ]}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => navigate("CarDetails", { car: item })} underlayColor="lightgray" style={{ paddingBottom: 5 }}>
                            <View style={styles.item}>

                                <Image source={item.image} style={styles.image} />
                                <View style={styles.name}>
                                    <Text style={{ flex: 2.5, fontSize: 25, color: 'black', textAlign: 'left'}}>{item.key}</Text>
                                    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: 'darkblue', textAlign: 'left'}}>{item.price + ' SAR'}</Text>
                                    <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'left'}}>{'1 Hour ago'}</Text>
                                </View>


                                {/* <View style={styles.price}>
                                    <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
                                    {/* <NumberFormat style={{fontWeight: 'bold'}} value={item.price} displayType={'text'} thousandSeparator={true} /> */}
                                {/* <Text>SAR</Text> */}
                                {/* </View> */}

                            </View>
                        </TouchableHighlight>
                    }
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        marginBottom: 0,
        height: 120,
    },
    image: {
        flex: 2,
        height: 120,
        resizeMode: 'stretch'
    },
    name: {
        flex: 3,
        backgroundColor: 'white',
        height: 120,
        padding: 5,
        marginLeft: 1,
    },
    price: {
        backgroundColor: 'yellow',
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginLeft: -80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
})