
import React, { Component } from 'react'

class OrderCard extends Component {
    state = {

    }

    render() {

        return (
            <>
                <h2>Order Card</h2>
                <p>{this.props.order.id}</p>
                <p>{this.props.order.taco.name}</p>
            </>
        )
    }

}

export default OrderCard;