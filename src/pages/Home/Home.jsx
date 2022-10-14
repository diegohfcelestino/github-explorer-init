import React from "react";
import { NavBar, Profile, RepositoryList } from "../../components";
import { SearchUser } from "../SearchUser/SearchUser";

export function Home() {
  return (
    <div className="contentWrapper">
      <NavBar />
      <SearchUser />
      <Profile />
      <RepositoryList />
    </div>
  );
}
