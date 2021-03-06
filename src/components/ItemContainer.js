import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/CakeActions'
import { buyIceCream } from '../redux/icecream/IceCreamActions'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item -{props.item}</h2>
            <button onClick={props.buyItem}>Buy The item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cakes.numCakes : state.iceCreams.numIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
