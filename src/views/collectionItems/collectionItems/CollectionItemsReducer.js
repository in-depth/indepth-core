import { createSelector } from 'reselect'
import { put } from 'redux-saga/effects'
import _sortBy from 'lodash/sortBy'

import api from './CollectionItemsAPI'

// ACTIONS
export const FETCH_COLLECTION_ITEMS_REQUEST = '@@IND-COLLECTION_ITEMS/FETCH_COLLECTION_ITEMS_REQUEST'
export const FETCH_COLLECTION_ITEMS_SUCCESS = '@@IND-COLLECTION_ITEMS/FETCH_COLLECTION_ITEMS_SUCCESS'
export const FETCH_COLLECTION_ITEMS_FAILURE = '@@IND-COLLECTION_ITEMS/FETCH_COLLECTION_ITEMS_FAILURE'

export const fetchCollectionItems = () => {
  console.log('fetch items')
  return {
    type: FETCH_COLLECTION_ITEMS_REQUEST,
    payload: {
      id: '4',
      title: 'Action Fired!',
      mainImage: {
        url: 'https://avatars0.githubusercontent.com/u/4032175?s=250',
        title: 'Balh',
      },
      date: '2222',
    },
  }
}

// SAGAS
export function* sagaLoadCollectionItems() {
  const items = yield api.fetchCollectionItems()
  yield put({ type: FETCH_COLLECTION_ITEMS_REQUEST, payload: items })
  // const items = yield fetchImages();
  console.log('saga - ', items)
}

const collectionItemState = {
  collectionItems: {},
  defaultOrder: [],
}

export const CollectionItemsReducer = (state = collectionItemState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_ITEMS_REQUEST:
      const order = Object.keys(action.payload)
      return {
        collectionItems: action.payload,
        defaultOrder: order,
      }
    default:
      return state
  }
}

// Selectors
const getCollectionItems = (state) => state.collectionItems
const getDefaultOrder = (state) => state.defaultOrder
const getSecondParam = (state, param) => param

export const getOrderedByTitle = createSelector(
  [getCollectionItems, getDefaultOrder, getSecondParam],
  (collectionItems, defaultOrder, orderedBy) => {
    if (orderedBy === 'default') return defaultOrder

    // Options 1
    // const listOfObjects = Object.keys(collectionItems).map(id => collectionItems[id])
    // const sortedListOfObjects = _sortBy(listOfObjects, 'title')
    // const sortedList = []
    // sortedListOfObjects.forEach((item) => sortedList.push(item.id))

    // Faster option, assumes we have a list of all items already.
    const sortedObjects = _sortBy(defaultOrder, (id) => collectionItems[id][orderedBy])

    return sortedObjects
  }
)
