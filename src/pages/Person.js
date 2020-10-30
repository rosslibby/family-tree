import React from 'react'
import Card from 'components/Card/Card'
import Page from 'components/Page/Page'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {person: props.people.person || null, personId: props.match.params.id}
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.match.params.id != state.personId)
    if (props.match.params.id != state.personId) return {
      person: props.people.list.filter(person => person.id == props.match.params.id)[0],
      personId: props.match.params.id
    }
    else if (props.match.params.id === state.personId && !state.person) return {
      person: props.people.list.filter(person => person.id == props.match.params.id)[0]
    }
    return null
  }

  _relative(id) {
    return this.props.people.list.filter(person => person.id == id)[0]
  }

  render() {
    const {person} = this.state
    const {parentId1, parentId2, spouseId} = person

    return (
      <Page centered={true}>
        <Card title={person.name}>
          <p>Born: {person.born}</p>
          <p>Hometown: {person.hometown}</p>
          {person.hasOwnProperty('parentId1')
            && person.hasOwnProperty('parentId2')
            && <p>Parents: <Link to={`./${person.parentId1}`}>{this._relative(person.parentId1).name}</Link> & <Link to={`./${person.parentId2}`}>{this._relative(person.parentId2).name}</Link></p>}
          {person.hasOwnProperty('parentId1')
            && !person.hasOwnProperty('parentId2')
            && <p>Parent: {this._relative(person.parentId1).name}</p>}
          {person.hasOwnProperty('spouseId') && <p>Spouse: <Link to={`./${person.spouseId}`}>{this._relative(person.spouseId).name}</Link></p>}
        </Card>
      </Page>
    )
  }
}

const mapStateToProps = ({people}) => ({people})

export default connect(mapStateToProps)(withRouter(Person))
