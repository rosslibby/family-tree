import React from 'react'
import Page from 'components/Page/Page'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Columns = ({people}) => {
  const columns = []
  let currentColumn = []

  for (let i = 0; i < people.length; i++) {
    const person = people[i]
    const personLink = <li key={person.id}><Link to={`person/${person.id}`}>{person.name}</Link></li>

    if ((i + 1) % 10 === 0 || i === people.length - 1) {
      if (i === people.length - 1) currentColumn.push(personLink)
      columns.push(<ul key={`list-${columns.length + 1}`}>{currentColumn}</ul>)
      currentColumn = []
    }
    else {
      currentColumn.push(personLink)
    }
  }
  return columns
}

const Home = ({people}) => (
  <Page centered={true}>
    <Columns people={people.list} />
  </Page>
)

const mapStateToProps = ({people}) => ({people})

export default connect(mapStateToProps)(Home)
