import React from 'react';
import './videoCard.css';
import Card from 'react-bootstrap/Card';

const VideoCard = (props) => (
  <div>
    <Card style={{height:"450px"}}>
      <Card.Img variant="top" src={props.thumbnail} style={{maxHeight:"220px"}} />
      <Card.Body>
        <h6>{props.title}</h6>
        <small>
          {props.description}
        </small>
      </Card.Body>
    </Card>
  </div>
);

export default VideoCard;
