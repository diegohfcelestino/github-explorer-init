import React, { useState, useEffect } from "react";
import { searchProfile } from "../../services/api";
import {
  IconFollowers,
  IconFollowing,
  IconLocalization,
  IconRepository,
  IconTwitter,
  IconUser
} from "../../services/icons";
import "./profile.scss";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    searchProfile().then(response => {
      setProfile(response);
    });
  }, []);
  console.log("profile", profile);

  return (
    <>
      {profile ? (
        <>
          <h2 className="name-profile">{profile.name}</h2>

          <div className="container profile">
            <div className="image-profile">
              <img
                src={profile.avatar_url}
                alt="profile"
                className="sobre-foto"
              />
            </div>
            <div className="description-profile">
              <div className="flex">
                <IconUser
                  style={{ width: 30, margin: 4 }}
                  color={"var(--COLOR-SECONDARY)"}
                />
                <p>Bio: {profile.bio}</p>
              </div>
              <div className="flex">
                <IconLocalization
                  style={{ width: 25, marginRight: 4 }}
                  color={"var(--COLOR-SECONDARY)"}
                />
                <p>Localização: {profile.location}</p>
              </div>
              <div className="flex">
                <IconTwitter
                  style={{ width: 25, marginRight: 4 }}
                  color={"var(--COLOR-SECONDARY)"}
                />
                <p>Twitter: {profile.twitter_username}</p>
              </div>
              <div className="flex">
                <IconRepository
                  style={{ width: 25, marginRight: 4 }}
                  color={"var(--COLOR-SECONDARY)"}
                />
                <p>Repositórios públicos: {profile.public_repos}</p>
              </div>
              <div className="flex">
                <IconFollowing
                  style={{ width: 25, marginRight: 4 }}
                  color={"var(--COLOR-SECONDARY)"}
                />
                <p>Seguindo: {profile.following}</p>
              </div>
              <div className="flex">
                <IconFollowers
                  style={{ width: 25, marginRight: 4 }}
                  color={"var(--COLOR-SECONDARY)"}
                />
                <p>Seguidores: {profile.followers}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2 className="name-profile">Falha na requisição</h2>
      )}
    </>
  );
}
