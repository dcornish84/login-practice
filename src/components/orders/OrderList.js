import React, { Component } from 'react'
import OrderCard from "./OrderCard";

class OrderList extends Component {
    state = {

    }

    render() {

        return (
            <>
                <p>Recent orders for userEmail</p>
                {this.props.orders.map(order =>
                    <OrderCard key={order.id} order={order} />
                )}

            </>
        )
    }

}

export default OrderList;