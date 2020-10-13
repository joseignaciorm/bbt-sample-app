import React from 'react'
import { connect } from "react-redux"

const LogoutButton = ({ projects }) => {
  return (
    <button className="button">{`Logout: ${projects.length}`}</button>
    )
}

const mapStateToProps = state => (
  {
    projects: state.dataReducer.projects
  }
)

export default connect(mapStateToProps)(LogoutButton)
