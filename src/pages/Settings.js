import React, { useState } from 'react'
import Card from 'components/Card/Card'
import Page from 'components/Page/Page'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Settings = ({user}) => {
  const [saving, setSaving] = useState(null)

  return (
    <Page>
      <Card title="Profile">
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('name')
            setTimeout(() => setSaving(null), 500)
          }}
          type="text"
          placeholder="Enter your name"
          defaultValue={user.name} />
          {saving === 'name' && <span className="input-saving">Saving changes...</span>}
        </div>
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('email')
            setTimeout(() => setSaving(null), 500)
          }}
          type="email"
          placeholder="Enter your email"
          defaultValue={user.email} />
          {saving === 'email' && <span className="input-saving">Saving changes...</span>}
        </div>
      </Card>
      <Card title="Contact">
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('phone')
            setTimeout(() => setSaving(null), 500)
          }}
          type="text"
          placeholder="Phone"
          defaultValue={user.phone} />
          {saving === 'phone' && <span className="input-saving">Saving changes...</span>}
        </div>
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('address')
            setTimeout(() => setSaving(null), 500)
          }}
          type="text"
          placeholder="Address"
          defaultValue={user.address} />
          {saving === 'address' && <span className="input-saving">Saving changes...</span>}
        </div>
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('city')
            setTimeout(() => setSaving(null), 500)
          }}
          type="text"
          placeholder="City"
          defaultValue={user.city} />
          {saving === 'city' && <span className="input-saving">Saving changes...</span>}
        </div>
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('state')
            setTimeout(() => setSaving(null), 500)
          }}
          type="text"
          placeholder="State"
          defaultValue={user.state} />
          {saving === 'state' && <span className="input-saving">Saving changes...</span>}
        </div>
        <div className="input-container"><input
          className="input"
          onChange={() => {
            setSaving('zip')
            setTimeout(() => setSaving(null), 500)
          }}
          type="text"
          placeholder="Zip code"
          defaultValue={user.zip} />
          {saving === 'zip' && <span className="input-saving">Saving changes...</span>}
        </div>
      </Card>
    </Page>
  )
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(Settings)
