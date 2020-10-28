import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const handleClick = jest.fn();

  given('tasks', () => [
    {
      id: 1,
      title: '무언가 하기',
    },
  ]);

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderList() {
    return render((
      <List
        tasks={given.tasks}
        onClickDelete={handleClick}
      />
    ));
  }

  context('with tasks', () => {
    it('renders title of todos', () => {
      const { container } = renderList();

      expect(container).toHaveTextContent('무언가 하기');
    });

    it('listens click event', () => {
      const { getByText } = renderList();

      fireEvent.click(getByText('완료'));

      expect(handleClick).toBeCalled();
    });
  });

  context('without tasks', () => {
    given('tasks', () => []);
    it('renders message', () => {
      const { container } = renderList();

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });
});
