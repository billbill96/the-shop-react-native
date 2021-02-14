import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import Card from '../UI/Card';
import Colors from '../../constants/Colors';

const ProductIem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <View>
                    <TouchableCmp onPress={props.onSelect} useForeground>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{uri: props.image}}/>
                            </View>
                            <View style={styles.detail}>
                                <Text style={styles.title}>{props.title}</Text>
                                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                            </View>
                            <View style={styles.action}>
                                {props.children}
                            </View>
                    </TouchableCmp>
                </View>
            </View>
        </Card>
    )
};

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    touchable: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    detail: {
        alignItems: 'center',
        height: '17%',
        padding: 10
    },
    title: {
        fontSize: 14,
        marginVertical: 4,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    }
});

export default ProductIem;