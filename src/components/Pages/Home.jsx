import React from "react";
import { connect } from "react-redux"
import { firestoreConnect }  from "react-redux-firebase"
import { compose } from "redux"
import DataApp from "./DataApp"

const Home = ({ project }) => {
  return (
    <div className="ed-grid">
      <h1>Home</h1>
      <DataApp projects={project} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    project: state.firestoreReducer.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(Home);
