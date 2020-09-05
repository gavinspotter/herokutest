import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Gavin Potter",
      image: "https://avatars2.githubusercontent.com/u/59751343?v=4",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
