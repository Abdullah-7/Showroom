// Car Details Screen
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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export class CarDetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.car.key}`,
        headerRight: <Text style={{ marginRight: 10 }}>Share</Text>,
    });

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    _call() {

    }

    _message() {

    }

    render() {
        const { navigate } = this.props.navigation;
        const car = this.props.navigation.state.params.car;
        const cameraIcon = (<Icon name="camera" size={23} color="#FFF" />)

        const tableTitle = ['Brand', 'Type', 'Year'];
        const tableData = [
            ['Brand:', 'Ferrari', 'Kilo:', '0'],
            ['Type:', 'X90', 'City:', 'Riyadh'],
            ['Year:', '2017', 'Date:', '1 hour ago'],
        ];

        /* Car Description: TO BE DELETED */
        var payments = [];
        for (let i = 0; i < 30; i++) {
            payments.push(
                <View key={i}>
                    <Text style={styles.carDescription}>Test</Text>
                </View>
            )
        }

        /* Similar Cars */
        var similarCars = [];
        let pic = {
            uri: 'https://auto.ndtvimg.com/car-images/medium/ferrari/gtc4lusso/ferrari-gtc4lusso.jpg'
        };
        for (let i = 0; i < 3; i++) {
            similarCars.push(
                <View key={i} style={{ flex: 1 }}>
                    <TouchableHighlight onPress={() => navigate("CarDetails")} underlayColor="lightgray">
                        <View style={styles.item}>

                            <Image source={pic} style={styles.imageSimilar} />
                            <Text style={styles.nameSimilar}>Car 1</Text>
                            <View style={styles.priceSimilar}>
                                <Text>570,000</Text>
                                <Text>SAR</Text>
                            </View>

                        </View>
                    </TouchableHighlight>
                </View>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.imageContainer}>
                        {/* <TouchableHighlight onPress={() => navigate('carImages')}> */}
                        <IndicatorViewPager
                            style={{ minHeight: 300 }}
                            indicator={this._renderDotIndicator()}
                        >
                            <View style={{ backgroundColor: 'cadetblue' }}>
                                <Image source={car.image} style={styles.image} />
                            </View>
                            <View style={{ backgroundColor: 'cornflowerblue' }}>
                                <Image source={car.image} style={styles.image} />
                            </View>
                            <View style={{ backgroundColor: '#1AA094' }}>
                                <Image source={car.image} style={styles.image} />
                            </View>
                        </IndicatorViewPager>
                        {/* <Image source={car.image} style={styles.image}/> */}
                        {/* </TouchableHighlight> */}
                        {/* <View style={styles.imageCount}>
                        <Text style={styles.imageCountText}>5x  </Text>
                        {cameraIcon}
                    </View> */}
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.carName}>Ferrari X90 2017</Text>
                        <Text style={styles.carPrice}>570,000 SAR</Text>
                        <Text style={styles.carDetails}>Car Details</Text>
                        {/* <View style={styles.carDetailsTable}>
                        <View style={{flex:1}}>
                            <View style={styles.carDetailsTableItem}>
                                <View style={{flexDirection: 'row', flex: 1, maxHeight: 30}}><Text style={styles.carDetailsTableItemTitle}>Brand:</Text><Text style={styles.carDetailsTableItemInfo}>Ferrari</Text></View>
                                <View style={{flexDirection: 'row', flex: 1, maxHeight: 30}}><Text style={styles.carDetailsTableItemTitle}>Type:</Text><Text style={styles.carDetailsTableItemInfo}>X90</Text></View>
                                <View style={{flexDirection: 'row', flex: 1, maxHeight: 30}}><Text style={styles.carDetailsTableItemTitle}>Year:</Text><Text style={styles.carDetailsTableItemInfo}>2017</Text></View>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={styles.carDetailsTableItem}>
                                <View style={{flexDirection: 'row', flex: 1, maxHeight: 30}}><Text style={styles.carDetailsTableItemTitle}>Kilo:</Text><Text style={styles.carDetailsTableItemInfo}>0</Text></View>
                                <View style={{flexDirection: 'row', flex: 1, maxHeight: 30}}><Text style={styles.carDetailsTableItemTitle}>City:</Text><Text style={styles.carDetailsTableItemInfo}>Riyadh</Text></View>
                                <View style={{flexDirection: 'row', flex: 1, maxHeight: 30}}><Text style={styles.carDetailsTableItemTitle}>Date:</Text><Text style={styles.carDetailsTableItemInfo}>1 hour ago</Text></View>
                            </View>
                        </View>
                    </View> */}
                        <Table borderStyle={{ borderColor: 'lightgray' }}>
                            <Rows data={tableData} style={styles.row} textStyle={styles.text} />
                        </Table>
                        {
                            payments
                        }
                        <Text style={styles.carDetails}>Similar Cars</Text>
                        {
                            similarCars
                        }
                    </View>
                    {/* <Text style={styles.content}>{car.key} price: {car.price}</Text> */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 2,
        minHeight: 200,
        resizeMode: 'stretch',
    },
    imageCount: {
        flexDirection: 'row',
        width: 65,
        padding: 5,
        marginTop: -50,
        backgroundColor: 'gray',
    },
    imageCountText: {
        color: 'white',
        fontSize: 18,
    },
    content: {
        flex: 2,
        marginTop: 2,
        backgroundColor: 'white',
    },
    carName: {
        color: 'black',
        fontSize: 25,
        padding: 10,
        paddingBottom: 0,
        textAlign: 'left'
    },
    carPrice: {
        color: 'darkblue',
        fontSize: 25,
        padding: 10,
        paddingTop: 0,
        textAlign: 'left'
    },
    carDetails: {
        color: 'black',
        backgroundColor: 'lightgray',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'left'
    },
    carDetailsTable: {
        flexDirection: 'row',
        flex: 1,
        maxHeight: 100,
    },
    carDetailsTableItem: {
        flex: 1,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: 'lightgray',
    },
    carDetailsTableItemTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 3,
    },
    carDetailsTableItemInfo: {
        flex: 1,
        fontSize: 20,
        textAlign: 'right',
        padding: 3,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'left'
    },
    row: {
        height: 30
    },
    carDescription: {
        fontSize: 20,
        padding: 10,
        textAlign: 'left'
    },
    item: {
        flexDirection: 'row',
        margin: 5,
        marginBottom: 0,
        height: 80,
    },
    imageSimilar: {
        flex: 1,
        height: 80,
    },
    nameSimilar: {
        flex: 3,
        backgroundColor: 'white',
        height: 80,
        padding: 5,
    },
    priceSimilar: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginLeft: -60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

})