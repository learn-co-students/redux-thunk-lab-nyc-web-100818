export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CATS' })
    return fetch('http://localhost:4000/db')
      .then(r=>r.json())
      .then(response => dispatch({ type: 'LOADING_CATS', payload: response.images }))
  }
}
