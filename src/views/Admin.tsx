import AdminMediaRow from '../components/AdminMediaRow';
import {useMedia} from '../hooks/apiHooks';

const Admin = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <div className="admin-bg flex h-screen flex-col items-center justify-center">
        <h1 className=" text-3xl font-bold text-red-600">
          This is an admin panel in which the administrator can monitor and
          delete posts as they see fit.
        </h1>
        <h1 className=" text-3xl font-bold text-red-600">
          Later on, there will also be a possibility to delete or modify users
          if needed.
        </h1>
        <h1 className=" text-5xl font-bold text-red-600">
          !!! THIS IS STILL A WIP !!!
        </h1>
      </div>
      {/* TODO: Display all users in a table and add a possibility to delete or modify users if needed. */}
      <h1 className="mb-6 text-center text-5xl font-bold text-white underline">
        Users
      </h1>
      <table className="w-full border-collapse">
        <thead className="text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {/* {usersArray.map((user) => (
            <AdminUserRow key={user.user_id} user={user} />
          ))} */}
        </tbody>
      </table>

      <h1 className="mb-6 text-center text-5xl font-bold text-white underline">
        Media
      </h1>
      <table className="w-full border-collapse">
        <thead className="text-white">
          <tr>
            <th className="px-4 py-2">Thumbnail</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Created</th>
            <th className="px-4 py-2">Size</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Owner</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <AdminMediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
