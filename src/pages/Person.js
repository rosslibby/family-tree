import React from 'react'
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

  render() {
    console.log(this.props, this.state)
    return (
      <Page>
        {this.state.person.name} | {this.state.person.born}
      </Page>
    )
  }
}

const mapStateToProps = ({people}) => ({people})

export default connect(mapStateToProps)(withRouter(Person))
