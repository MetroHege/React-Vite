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
      <td className="flex flex-col pb-4 pt-4">
        <Link
          className="rounded-md bg-slate-700 p-2 hover:bg-slate-900"
          to="/single"
          state={item}
        >
          View
        </Link>
        {user &&
          (user.user_id === item.user_id || user.level_name === 'Admin') && (
            <>
              <button
                className="rounded-md bg-blue-700 p-2 hover:bg-slate-900"
                onClick={() => console.log('modify', item)}
              >
                Modify
              </button>
              <button
                className="rounded-md bg-rose-700 p-2 hover:bg-slate-900"
                onClick={() => console.log('delete', item)}
              >
                Delete
              </button>
            </>
          )}
      </td>
    </tr>
  );
};

export default MediaRow;
