import React from 'react';
import './videoCard.css';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import splitString from '../../shared/utils';

const VideoCard = (props) => (
  <div>
    <Card className="card-item">
    <a href={props.url} className="card-link">
      <Card.Img variant="top" src={props.thumbnail} style={{maxHeight:"220px"}} />
      </a>
      <Card.Body>
        <Row>
          <Col xs={2} >
          <a href={props.channelUrl} className="card-link">
          <img src={props.channelImage} className="image-channel" alt={props.channel} />
          </a>
          </Col>
          <Col xs={10}>
          <a href={props.url} className="card-link">
          <h6 className="card-title">{splitString(props.title,50)}</h6>
          </a>
          </Col>     
        </Row>
        <a href={props.url} className="card-link">
        <p className="card-text">
          {splitString(props.description,100)}
        </p>
        </a>

      </Card.Body>
      <footer>
      <a href={props.channelUrl} className="card-link card-channel-title">
          {props.channel}
      </a>
      <p className="card-date">
          {moment(props.date).fromNow()}
        </p>      
      </footer>
    </Card>
  </div>
);

export default VideoCard;
