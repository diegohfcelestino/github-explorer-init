import React, { useRef, useState } from 'react';
import { Form } from 'rsuite';
import { searchUsersList } from '../../services/api';
import {
  IconFollowers,
  IconFollowing,
  IconLink,
  IconLocalization,
  IconRepository,
  IconTwitter,
  IconUser,
} from '../../services/icons';
import { TextField } from '../TextField/TextField';
import './search.scss';

export function Search({ setUserName }) {
  const [userData, setUserData] = useState(null);
  const timer = useRef(null);

  console.log('DADOSUSUARIO', userData);

  function handleChange(value) {
    if (timer) {
      clearInterval(timer.current);
    }
    timer.current = setTimeout(() => {
      searchUsersList(value).then((response) => {
        setUserData(response);
        setUserName(value);
      });
    }, 2500);
  }

  return (
    <div className='search'>
      <Form>
        <TextField
          width='100%'
          label='Pesquisar usuário'
          name='users'
          placeholder='Insira o usuário'
          onChange={handleChange}
        />
      </Form>
      {userData && (
        <>
          <h3 className='name-users'>{userData?.name}</h3>
          <div className='users-list'>
            <div className='image-profile'>
              <a href={userData.html_url} target='_blank' rel='noreferrer'>
                <img
                  className='image-users'
                  src={userData?.avatar_url}
                  alt={userData?.name}
                />
              </a>
            </div>
            <div className='description-users'>
              <div className='flex'>
                <IconUser
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Bio: {userData?.bio}</p>
              </div>
              <div className='flex'>
                <IconLocalization
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Localização: {userData?.location}</p>
              </div>
              <div className='flex'>
                <IconTwitter
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Twitter: {userData?.twitter_username}</p>
              </div>
              <div className='flex'>
                <IconRepository
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Repositórios públicos: {userData?.public_repos}</p>
              </div>
              <div className='flex'>
                <IconFollowing
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Seguindo: {userData?.following}</p>
              </div>
              <div className='flex'>
                <IconFollowers
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Seguidores: {userData?.followers}</p>
              </div>
              <div className='flex'>
                <IconLink
                  style={{ width: 25, marginRight: 4 }}
                  color={'var(--COLOR-SECONDARY)'}
                />
                <p>Url: {userData?.html_url}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
