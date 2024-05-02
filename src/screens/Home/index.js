import React, { useEffect } from "react";
import { DispatchToProps, StateToProps } from "./container/container";

import { Layout } from "components";

import UserList from "./components/UserList";

const Home = () => {
  // @hooks
  const state = StateToProps.useContainer();
  const dispatch = DispatchToProps.useContainer();

  useEffect(() => {
    dispatch.getUserList();
  }, []);

  return (
    <Layout>
      <section className="mt-16 bg-white rounded p-4">
        <h2 className="text-2xl mb-6 font-bold">User List</h2>
        <UserList
          userList={state.userList}
          onSelectUser={(userName) => dispatch.setSelectedUser(userName)}
        />
      </section>
    </Layout>
  );
};

export default Home;
