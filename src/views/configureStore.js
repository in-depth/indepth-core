import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createLogger from 'redux-logger'

import rootReducer from './rootReducer'
import { sagaLoadCollectionItems } from './collectionItems/collectionItems/CollectionItemsReducer'

const configureStore = () => {
  const loggerMiddleware = createLogger({
    collapsed: true,
  })

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
    )
  )

  sagaMiddleware.run(sagaLoadCollectionItems)

  return store
}


export default configureStore
