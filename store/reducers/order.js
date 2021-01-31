import Order from '../../models/order';
import { ADD_ORDER } from '../actions/order';

const initialSate = {
    order: []
};

export default (state = initialSate, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), 
                                        action.orderData.items, 
                                        action.orderData.amount, 
                                        new Date())
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    }
    return state;
}