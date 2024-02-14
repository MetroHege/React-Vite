import {Link} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import {useUserContext} from '../hooks/ContextHooks';

const MediaRow = (props: {item: MediaItemWithOwner}) => {
  const {item} = props;
  const {user} = useUserContext();
  console.log('user', user);

  return (
    <tr className="media-row shadow-md">
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>{item.username}</td>
      <td className="p-4">
        <div className="mb-2">
          <Link
            className="block flex items-center justify-center rounded-md bg-gradient-to-r from-slate-500 to-slate-800 p-2"
            to="/single"
            state={item}
          >
            View
          </Link>
        </div>
        {user &&
          (user.user_id === item.user_id || user.level_name === 'Admin') && (
            <>
              <div className="mb-2">
                <button
                  className="block rounded-md bg-gradient-to-r from-blue-600 to-blue-900 p-2"
                  onClick={() => console.log('modify', item)}
                >
                  Modify
                </button>
              </div>
              <div>
                <button
                  className="block rounded-md bg-gradient-to-r from-rose-600 to-rose-900 p-2"
                  onClick={() => console.log('delete', item)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
      </td>
    </tr>
  );
};

export default MediaRow;
