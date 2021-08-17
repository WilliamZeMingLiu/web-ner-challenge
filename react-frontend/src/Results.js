import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

export default function Results(props) {
  
  const data = props.data;

  if(data.length < 1) return <Alert variant="warning">No entities found.</Alert>;

  const org = [];
  const person = [];
  const gpe = [];
  const loc = [];

  for(const word of data){
    const entity = word[0];
    const tag = word[1];
    if(tag === "ORG"){
      org.push(entity);
    }
    else if(tag === "PERSON"){
      person.push(entity);
    }
    else if(tag === "GPE"){
      gpe.push(entity);
    }
    else{
      loc.push(entity);
    }
  }

  const empty = <span className="empty">N/A</span>;

  return(
    <div className="list">
      <ListGroup>
        <ListGroup.Item>
          <Badge bg="info">ORG</Badge> {org.length ? org.join(', ') : empty}
        </ListGroup.Item>
        <ListGroup.Item>
          <Badge bg="success">PERSON</Badge> {person.length ? person.join(', ') : empty}
        </ListGroup.Item>
        <ListGroup.Item>
          <Badge bg="warning">GPE</Badge> {gpe.length ? gpe.join(', ') : empty}
        </ListGroup.Item>
        <ListGroup.Item>
          <Badge bg="danger">LOC</Badge> {loc.length ? loc.join(', ') : empty}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
  
}