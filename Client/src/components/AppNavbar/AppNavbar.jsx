import React from "react";
import { withRouter } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AppNavbar extends React.Component {
  render() {
    const url = this.props.location.pathname;
    const message = this.props.message ? this.props.message : "";
    return (
      <div className="clearfix">
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="/">Wallakeep</Navbar.Brand>
          {message && <div>{message}</div>}

          {url !== "/register" && (
            <>
              <Button onClick={this.props.history.goBack}>
                Logout
              </Button>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> */}
                  {/* Se podrían poner componentes de Menú según esté logeado o no*/}
                  {/* <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/link"></Nav.Link> */}
                {/* </Nav>
                <Form inline>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-primary">Search</Button>
                </Form>
              </Navbar.Collapse> */}
            </>
          )}
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AppNavbar);
