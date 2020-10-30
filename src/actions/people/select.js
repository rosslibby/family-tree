import { SELECT_PERSON } from 'constants/people'

const select = id => ({
  type: SELECT_PERSON,
  id
})

export default select
