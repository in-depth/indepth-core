import React from 'react'

import { CollectionItemsListContainer, GetCollectionItemsButton } from './index'

const CollectionItemsRoute = (props) => {
  return (
    <div>
      <CollectionItemsListContainer orderBy={props.location.query.orderBy} />
      <GetCollectionItemsButton />
    </div>
  )
}

CollectionItemsRoute.propTypes = {
  location: React.PropTypes.object,
}


export default CollectionItemsRoute
