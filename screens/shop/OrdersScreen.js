import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return <FlatList data={orders} 
        keyExtractor={item => item.id} 
        renderItem={ itemData => 
                <OrderItem 
                    amount={itemData.item.totalAmount}
                    date={itemData.item.date.toLocaleDateString('en-EN', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                    item={itemData.item.items}
                    />}
            />
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