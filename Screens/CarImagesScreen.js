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
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export class CarImagesScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        //title: `${navigation.state.params.car.key}`,
        headerRight: <Text style={{paddingRight: 10}}>Share</Text>,
    });
    render(){
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex: 2}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
                <View style={{flex: 0.2, flexDirection: 'row', backgroundColor: 'gray'}}>
                    <Button style={{width: 100, height: 10, margin: 3}} title="Message MMMM"/>
                    <Button style={{width: 100, height: 10, margin: 3}} title="Call MMMM" color="red"/>
                </View>
            </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}