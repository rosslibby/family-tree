import React from 'react'
import Card from 'components/Card/Card'
import Page from 'components/Page/Page'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Settings = ({user}) => (
  <Page>
    <Card title="Name">
      <input
        className="input"
        type="text"
        placeholder="Enter your name"
        defaultValue={user.name} />
    </Card>
    <Card title="Contact">
      <input
        className="input"
        type="text"
        placeholder="Phone"
        defaultValue={user.phone} />
      <input
        className="input"
        type="text"
        placeholder="Address"
        defaultValue={user.address} />
      <input
        className="input"
        type="text"
        placeholder="City"
        defaultValue={user.city} />
      <input
        className="input"
        type="text"
        placeholder="State"
        defaultValue={user.state} />
      <input
        className="input"
        type="text"
        placeholder="Zip code"
        defaultValue={user.zip} />
    </Card>
  </Page>
)

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(Settings)
