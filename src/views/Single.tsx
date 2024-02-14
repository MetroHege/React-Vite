import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import Likes from '../components/Likes';

const Single = () => {
  const {state} = useLocation();
  const navigate: NavigateFunction = useNavigate();
  //console.log('single state', state);
  const item: MediaItemWithOwner = state;

  return (
    <div className=" m-6">
      <h3 className="text-3xl font-bold">~ {item.title} ~</h3>
      {item.media_type.includes('video') ? (
        <video controls src={item.filename}></video>
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <Likes item={item} />
      <p>{item.description}</p>
      <p>
        Uploaded at: {new Date(item.created_at).toLocaleString('fi-FI')}, by:{' '}
        {item.username}
      </p>
      <p>{item.filesize}</p>
      <p>{item.media_type}</p>
      <div>
        <button
          className="mt-4 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 p-2 text-black"
          onClick={() => {
            navigate(-1);
          }}
        >
          🢀 Go back
        </button>
      </div>
    </div>
  );
};

export default Single;
