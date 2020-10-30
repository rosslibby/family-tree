import React from 'react'
import Card from 'components/Card/Card'
import Page from 'components/Page/Page'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {person: props.people.person, personId: props.match.params.id}
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.id == state.personId) return {
      person: props.people.list.filter(person => person.id == props.match.params.id)[0],
      personId: props.match.params.id
    }
    return null
  }

  _relative(id) {
    return this.props.people.list.filter(person => person.id == id)[0]
  }

  render() {
    const {person} = this.state
    console.log(person.parentId2)

    return (
      <Page centered={true}>
        <Card title={person.name}>
          <p>Born: {person.born}</p>
          <p>Hometown: {person.hometown}</p>
          {person.hasOwnProperty('parentId1')
            && person.hasOwnProperty('parentId2')
            && <p>Parents: {this._relative(person.parentId1).name} & {this._relative(person.parentId2).name}</p>}
          {person.hasOwnProperty('parentId1')
            && !person.hasOwnProperty('parentId2')
            && <p>Parent: {this._relative(person.parentId1).name}</p>}
          {person.hasOwnProperty('spouseId') && <p>Spouse: {this._relative(person.spouseId).name}</p>}
        </Card>
      </Page>
    )
  }
}

const mapStateToProps = ({people}) => ({people})

export default connect(mapStateToProps)(withRouter(Person))
