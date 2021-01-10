import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import ProductIem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.avaiableProducts);
    return <FlatList 
                data={products} 
                keyExtractor={item => item.id} 
                renderItem={itemData => <ProductIem 
                                            image={itemData.item.imageUrl} 
                                            title={itemData.item.title}
                                            price={itemData.item.price}
                                            onViewDetail={() => {}}
                                            onAddToCart={() => {}}
                                        /> }
            />
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Product'
};

export default ProductsOverviewScreen;