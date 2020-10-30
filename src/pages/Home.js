import React from 'react'
import Page from 'components/Page/Page'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({people}) => (
  <Page>
    <ul>
      {people.list.map(person => (
        <li key={person.id}>
          <Link to={`person/${person.id}`}>{person.name} | {person.born}</Link>
        </li>
      ))}
    </ul>
  </Page>
)

const mapStateToProps = ({people}) => ({people})

export default connect(mapStateToProps)(Home)
