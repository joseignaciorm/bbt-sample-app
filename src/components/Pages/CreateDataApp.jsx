import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import { createData } from "../../redux/actionCreators"

class CreateDataApp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createData(this.state)
  }

  render () {
    return (
      <Container>
        <h1>Create Data</h1>
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <Form className="border mt-5 px-3 py-3" onSubmit={this.handleSubmit}>
              <h3>Create New Data App Project</h3>
              <Form.Group>
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control as="input" type="text" placeholder="Enter title" id="title" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="content">Content</Form.Label>
                <Form.Control  as="textarea" rows={3} placeholder="Enter the content" id="content" onChange={this.handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createData: data => dispatch(createData(data))
  }
}
export default connect(null, mapDispatchToProps)(CreateDataApp)
