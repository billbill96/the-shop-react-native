import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return <FlatList date={orders} 
        keyExtractor={item => item.id} 
        renderItem={ itemData => <Text>{itemData.item.totalAmount}</Text>}/>
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Order",
        headerLeft: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' 
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/> 
        </HeaderButtons>,
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' 
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                onPress={() => {
                    navData.navigation.navigate('Cart')
                }}/>
        </HeaderButtons>
    }
};

export default OrdersScreen