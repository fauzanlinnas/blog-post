import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DispatchToProps, StateToProps } from "./container/container";

const Home = () => {
  // @hooks
  const state = StateToProps.useContainer();
  const dispatch = DispatchToProps.useContainer();
  console.log(state.userList);

  useEffect(() => {
    dispatch.getUserList();
  }, []);

  return (
    <main>
      <h2 className="text-2xl mb-6 font-bold">User List</h2>
      {state.userList.map((val) => (
        <div key={val.id} className="flex items-center space-x-2">
          <h3 className="w-96 text-xl font-medium">{val.name}</h3>
          <Link
            to={`/users/${val.id}`}
            className="shadow bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            See Posts
          </Link>
          <Link
            to={`/users/${val.id}/album-list`}
            className="shadow bg-yellow-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            See Albums
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Home;
