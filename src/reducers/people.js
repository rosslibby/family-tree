const people = (state, action) => {
  switch(action.type) {
    case 'SELECT_PERSON':
      return {...state, person: state.list.filter(item => item.id == action.id)[0]}
    default:
      return Object.assign({}, state, {...state})
  }
}

export default people
