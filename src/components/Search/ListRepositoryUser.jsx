import React, { useState, useEffect } from 'react';
import { listCommitsRepository, repositoryListUsers } from '../../services/api';
import { Pagination } from '../Pagination/Pagination';
import { SelectPagination } from '../Pagination/SelectPagination';

export function ListRepositoryUser({ userName }) {
  const [userRepositories, setUserRepositories] = useState([]);

  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(userRepositories.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentRepositories = userRepositories.slice(startIndex, endIndex);

  useEffect(() => {
    repositoryListUsers(userName).then((response) => {
      console.log('response', response);
      let newResponse = [];
      // eslint-disable-next-line array-callback-return
      response.map((item) => {
        listCommitsRepository(userName, item.name).then((res) => {
          item.totalCommits = res.length;
        });
        newResponse.push(item);
      });
      console.log('segundoResponse', response);
      setUserRepositories(newResponse);
    });
  }, [userName]);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  console.log('currentRepositories', currentRepositories);

  return (
    <>
      {currentRepositories.length ? (
        <div className='repository-list-user'>
          <h3 className='title-list-user'>Lista de repositórios</h3>
          <SelectPagination
            itensPerPage={itensPerPage}
            setItensPerPage={setItensPerPage}
          />
          <ul className='users-list'>
            {currentRepositories?.map((repository) => {
              console.log('repository', repository);
              return (
                <li key={repository.name} className='item-list'>
                  <h5>Nome do Repositório: {repository.name}</h5>
                  <p>Descrição: {repository.description}</p>
                  <p>Linguagem: {repository.language}</p>
                  <p>Criado em: {repository.created_at}</p>
                  <p>Forks feitos: {repository.forks}</p>
                  <p>Estrelas: {repository.stargazers_count}</p>
                  <p>Branch padrão: {repository.default_branch}</p>
                  <p>Commits: {repository.totalCommits}</p>

                  <a
                    href={repository.html_url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Acessar repositórios
                  </a>
                </li>
              );
            })}
          </ul>
          <Pagination
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      ) : null}
    </>
  );
}
