import actions from '../../actions'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../../components/Common/LoadingIndicator';


function NewArrivals({products, isLoading}) {

    if(isLoading) {
        return <LoadingIndicator />
    }

    if (!products) {
        return <p>No data</p>
    }

    return <>
    {
        NewArrivals.map(item => {
          return <>
          {item.name}
          {item.price}
          </>
        })
    }
    </>
}

const mapStateToProps = state => {
    return {
        products: state.product.storeProducts,
        isLoading: state.product.isLoading
    }
}

export default connect(mapStateToProps, actions)(NewArrivals)