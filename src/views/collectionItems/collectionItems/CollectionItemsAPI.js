import fetch from 'isomorphic-fetch'
// fetch URL: https://indepth-d9a77.firebaseio.com/collection/4.json?print=pretty
const api = {}

api.fetchCollectionItems = () => {
  return fetch('https://indepth-d9a77.firebaseio.com/collection.json').then((response) => {
    return response.json().then((json) => {
      console.log(json)
      return json
    }).catch((err) => {
      console.log(err)
    })
  })
}

export default api
