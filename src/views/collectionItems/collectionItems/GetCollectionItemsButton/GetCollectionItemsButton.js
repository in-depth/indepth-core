import React from 'react'
import { connect } from 'react-redux'
import { fetchCollectionItems } from '../CollectionItemsReducer'

const GetCollectionItemsButton = (props) => {
  return (
    <button onClick={props.dispatchFetchCollectionItems}>
      Get Items
    </button>
  )
}

GetCollectionItemsButton.propTypes = {
  dispatchFetchCollectionItems: React.PropTypes.func,
}

// Container
const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCollectionItems: () => dispatch(fetchCollectionItems()),
})

export default connect(undefined, mapDispatchToProps)(GetCollectionItemsButton)
