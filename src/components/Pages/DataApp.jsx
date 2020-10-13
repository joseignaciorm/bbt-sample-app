import React from "react";
import {Card, Button} from "react-bootstrap"

const DataApp = ({projects}) => {
  return (
    <div className="ed-grid">
      <h1>Data Appication</h1>
      { 
        projects && projects.map(project => {
          
          return (
            <Card className="mt-4" key={project.id}>
              <Card.Header>Data App</Card.Header>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.content}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  );
};

export default DataApp;
