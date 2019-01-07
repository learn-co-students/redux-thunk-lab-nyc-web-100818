export default function catReducer(state = [], action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return action.payload
    case 'FETCH_CATS':
      return state
    default:
      return state
  }



}
