import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetialScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroudColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
}
const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            size={23}
            color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
},{
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions: defaultNavOptions
})

const ShopNavigator = createDrawerNavigator({
    Product: {screen: ProductsNavigator},
    Orders: {screen: OrdersNavigator}
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
});


export default createAppContainer(ShopNavigator);