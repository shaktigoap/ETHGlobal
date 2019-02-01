import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(38,37,90,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    border: 'none',
    background: 'none',
    position: 'relative',
    padding: 0,
    borderRadius: 0,
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    height: 'auto',
    overflow: 'hidden',
  },
};

const VideoModal = ({ url, visible = false, handleOnClose, ...other }) => (
  <Modal
    isOpen={visible}
    onRequestClose={handleOnClose}
    shouldcloseOnEsc={true}
    contentLabel="Youtube Preview"
    style={modalStyle}
    ariaHideApp={false}
    {...other}
  >
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </PlayerWrapper>
  </Modal>
);

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default VideoModal;
