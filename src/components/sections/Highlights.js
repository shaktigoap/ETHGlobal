import React, { Component } from 'react';
import styled from 'styled-components';

import VideoModal from 'common/VideoModal';

import { Section, Container } from 'components/global';

const FEATURED = [
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=egC2F_JKuhc',
  },
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=lyu7v7nWzfo',
  },
];

const RECENT = [
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=RplnSVTzvnU',
  },
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=egC2F_JKuhc',
  },
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=lyu7v7nWzfo',
  },
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=RplnSVTzvnU',
  },
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=lyu7v7nWzfo',
  },
  {
    title: 'Vitalik at Singapore',
    duration: '34:00',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=RplnSVTzvnU',
  },
];

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      previewVideoUrl: '',
    };
  }

  handleVideoThumbClick = url =>
    this.setState({ modalOpen: true, previewVideoUrl: url });

  handleModalClose = () => this.setState({ modalOpen: false });

  getVideoThumb = url =>
    `https://img.youtube.com/vi/${url.split('v=')[1]}/maxresdefault.jpg`;

  render() {
    const { modalOpen, previewVideoUrl } = this.state;
    return (
      <Section id="highlights" {...this.props} background="#1F294F">
        <VideoModal
          url={previewVideoUrl}
          modalOpen={modalOpen}
          handleClose={this.handleModalClose}
        />
        <Container fluid>
          <Heading>
            <h2>Get the highlights</h2>
            <p>Check out panels, workshops and more from our past events.</p>
          </Heading>
          <H4>Featured</H4>
          <Featured>
            {FEATURED.map(({ title, duration, location, url, image }) => (
              <Video onClick={() => this.handleVideoThumbClick(url)}>
                <img src={this.getVideoThumb(url)} alt={title} />
                <Overlay>
                  <PlayIcon />
                  <VideoDetails
                    title={title}
                    duration={duration}
                    location={location}
                  />
                </Overlay>
              </Video>
            ))}
          </Featured>
          <H4>RECENT</H4>
          <Recent num={RECENT.length}>
            {RECENT.map(({ title, duration, location, url, image }) => (
              <div>
                <Video small onClick={() => this.handleVideoThumbClick(url)}>
                  <img src={this.getVideoThumb(url)} alt={title} />
                  <PlayIcon />
                </Video>
                <VideoDetails
                  title={title}
                  duration={duration}
                  location={location}
                  small
                />
              </div>
            ))}
          </Recent>
        </Container>
      </Section>
    );
  }
}

const VideoDetails = ({ small, title, duration, location }) => (
  <Details small={small}>
    <h3>{title}</h3>
    <p>
      {duration} &#9679; {location}
    </p>
  </Details>
);

const Heading = styled.div`
  text-align: center;

  h2 {
    color: white;
  }

  p {
    display: block;
    color: ${props => props.theme.color.white.light};
    margin-top: 16px;
    margin-bottom: 64px;
  }
`;

const H4 = styled.h4`
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 48px;

  &::before {
    content: '';
    height: 30px;
    width: 8px;
    background: ${props => props.theme.color.blue.regular};
    margin-right: 12px;
  }

  @media (max-width: 1199px) {
    margin-left: 16px;
  }
`;

const Featured = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 1199px) {
    margin: 0 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Details = styled.div`
  h3 {
    color: ${props => props.theme.color.white.regular};
  }

  p {
    color: ${props => props.theme.color.white.light};
  }

  ${props =>
    props.small &&
    `
    h3 {
      ${props.theme.font_size.regular};
      margin-top: 16px;
      margin-bottom: 8px;
    }
    p {
      ${props.theme.font_size.small};
    }
  `};
`;

const PlayIcon = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  position: relative;
  background-color: #fff;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 23px;
    left: 27px;
    width: 0;
    height: 0;
    border-left: 12px solid #040202;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 32px;
  bottom: 32px;
  z-index: 2;

  > ${PlayIcon} {
    margin-bottom: 16px;
  }
`;

const Video = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid rgba(132, 142, 174, 0.5);
  max-height: ${props => (props.small ? 192 : 384)}px;
  ${props => props.small && `width: 260px`};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(38, 37, 90, 0) 0%,
      rgba(38, 37, 90, 0.8) 100%
    );
    z-index: 1;
  }

  img {
    max-height: ${props => (props.small ? 192 : 384)}px;
  }

  > img,
  > ${Overlay} {
    transition: transform 0.3s cubic-bezier(0.09, 0.33, 0.46, 1);
  }

  &:hover {
    cursor: pointer;

    > img {
      transform: scale(1.05);
    }

    > ${Overlay} {
      transform: scale(0.95);
    }
  }

  ${props =>
    props.small &&
    `
    > ${PlayIcon} {
      position: absolute;
      top: 64px;
      left: 92px;
      opacity: 0;
      transition: opacity 0.1s ease-in;
    }

    &:hover {
      > ${PlayIcon} {
        opacity: 1;
      }
    }
  `};
`;

const Recent = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.num},256px)}`};
  grid-gap: 24px;
  overflow-x: scroll;
  padding-bottom: 24px;

  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }

  @media (max-width: 1199px) {
    padding-left: 16px;
  }
`;

export default Highlights;
