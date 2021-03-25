import React from 'react';
import { render, screen} from '@testing-library/react';
import VideoCard from './VideoCard';

describe('test for loading props correclty in component', () => {

    test('load description correctly in VideoCard component', () => {
        render(<VideoCard 
            title={"this is the title"}
            description={"this is the description"}
            thumbnail={"this is the thumb url"}
            date={"2014-09-27T01:39:18Z"}
            url ={`"this is the video url"`}
            channel={"this is the channel title"}
            channelImage={"this is the image url"}
            channelUrl={`"this is the channel url"`}
        />);
      const element = screen.getByText(/this is the description/i);
      expect(element).toBeInTheDocument();
    });

    test('load title correctly in VideoCard component', () => {
        render(<VideoCard 
            title={"this is the title"}
            description={"this is the description"}
            thumbnail={"this is the thumb url"}
            date={"2014-09-27T01:39:18Z"}
            url ={`"this is the video url"`}
            channel={"this is the channel title"}
            channelImage={"this is the image url"}
            channelUrl={`"this is the channel url"`}
        />);
      const element = screen.getByText(/this is the title/i);
      expect(element).toBeInTheDocument();
    });

    test('load channel title correctly in VideoCard component', () => {
        render(<VideoCard 
            title={"this is the title"}
            description={"this is the description"}
            thumbnail={"this is the thumb url"}
            date={"2014-09-27T01:39:18Z"}
            url ={`"this is the video url"`}
            channel={"this is the channel title"}
            channelImage={"this is the image url"}
            channelUrl={`"this is the channel url"`}
        />);
      const element = screen.getByText(/this is the channel title/i);
      expect(element).toBeInTheDocument();
    });

});
