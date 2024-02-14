import React from 'react';
import Modal from 'react-modal';
import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';
import Likes from './Likes';
import {MediaItemWithOwner} from '../types/DBTypes';

const Single = () => {
  const {state} = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const item: MediaItemWithOwner = state;

  return (
    <div>
      <h3>{item.title}</h3>
      {item.media_type.includes('video') ? (
        <video controls src={item.filename}></video>
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <Likes item={item} />
      <p>{item.description}</p>
      <p>
        Uploaded at: {new Date(item.created_at).toLocaleString('fi-FI')}, by:{' '}
        {item.username}{' '}
      </p>
      <p>{item.filesize}</p>
      <p>{item.media_type}</p>
      <button
        className="rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 p-2"
        onClick={() => {
          navigate(-1);
        }}
      >
        🢀 Go back
      </button>
    </div>
  );
};

const SingleModal = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = React.useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
    navigate(-1);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Media Details"
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded bg-black p-8 shadow-lg"
      overlayClassName="fixed inset-0 bg-black opacity-50"
    >
      <div className="mx-auto max-w-2xl">
        <Single />
      </div>
    </Modal>
  );
};

export default SingleModal;
