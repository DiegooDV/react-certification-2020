import React from 'react';
import Header from '../../components/Header/Header';
import { items } from '../../youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard/VideoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const channelItem = items[0];
items.shift();
const HomePage = () => (
  <>
    <Header />
    <Container style={{marginTop: "20px"}}>
      <Row>
        {items.map((item, index) => (
          <Col xs={12} md={6} lg={4} style={{marginTop: "30px", padding:"0px 30px 0px 30px"}} key={index}>
            <VideoCard
              key={index}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnail={item.snippet.thumbnails.high.url}
              date={item.snippet.publishedAt}
              url ={`https://www.youtube.com/watch?v=${item.id.videoId }`}
              channel={channelItem.snippet.channelTitle}
              channelImage={channelItem.snippet.thumbnails.high.url}
              channelUrl={`https://www.youtube.com/channel/${channelItem.id.channelId}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default HomePage;
