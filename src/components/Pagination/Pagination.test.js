import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

test('should render correct number of pagination buttons', () => {
  const fnMock = () => {};
  const pages = 4;
  const currentPage = 1;
  const { getByTestId } = render(
    <Pagination
      pages={pages}
      setCurrentPage={fnMock}
      currentPage={currentPage}
    />
  );

  const elButton = document.querySelectorAll('button');
  const index = 0;

  const el = document.querySelector('.pagination-container');

  expect(elButton[index]).toBeDefined();
  expect(elButton.length).toBe(pages);
});

test('should render correct label for pagination button', () => {
  // arrange
  const fnMock = () => {};
  const pages = 4;
  const currentPage = 1;
  const { getByTestId } = render(
    <Pagination
      pages={pages}
      setCurrentPage={fnMock}
      currentPage={currentPage}
    />
  );
  const elButton = document.querySelectorAll('button');
  const index = 0;

  // action

  // assert
  expect(elButton[index].textContent).toEqual(`${index + 1}`);
});
