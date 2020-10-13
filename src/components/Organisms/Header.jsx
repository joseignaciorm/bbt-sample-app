import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux"
import { signOut } from "../../redux/actionCreators"

const Header = (props) => {
  const { auth } = props
  const links = auth.uid
  return (
          <header className="main-header">
            <Navbar expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">Beep Beep Technology</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    {
                      links
                      ?
                      <>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/create-data">Create data</Nav.Link>
                      <Nav.Link onClick={props.signOut}>Log Out</Nav.Link>
                      </>
                      :
                      <>
                      <Nav.Link href="/login">Sign in</Nav.Link>
                      <Nav.Link href="/register">Sign up</Nav.Link>
                      </>
                    }
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
        );
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.firebaseReducer.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);
