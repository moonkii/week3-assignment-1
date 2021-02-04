import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  const handleChange = jest.fn();
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();

  const tasks = [
    {
      id: 1,
      title: 'task#1',
    },
    {
      id: 2,
      title: 'task#2',
    },
  ];

  beforeEach(() => {
    handleChange.mockClear();
    handleClickAddTask.mockClear();
  });

  it('renders title', () => {
    const { container } = render((
      <Page
        taskTitle=""
        onChangeTitle={handleChange}
        onClickAddTask={handleClickAddTask}
        tasks={tasks}
        onClickDeleteTask={handleClickDeleteTask}
      />
    ));

    expect(container).toHaveTextContent('To-do');
  });
});
