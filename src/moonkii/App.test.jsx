import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render((
      <App />
    ));
  }

  it('renders without crash', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('To-do');
  });

  it('renders listens change and click event', () => {
    const { queryByText, getByText, getByLabelText } = renderApp();

    expect(queryByText('할 일이 없어요!')).not.toBeNull();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '해야할 일' },
    });

    fireEvent.click(getByText('추가'));

    expect(queryByText('할 일이 없어요!')).toBeNull();

    fireEvent.click(getByText('완료'));
  });
});
