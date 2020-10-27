import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });

  function renderInput() {
    return render((
      <Input
        value=""
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders label text', () => {
    const { queryByLabelText } = renderInput();

    expect(queryByLabelText('할 일')).not.toBeNull();
  });

  it('listens change and click event', () => {
    const { getByLabelText, getByText } = renderInput();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '아무 일이나 하자' },
    });

    expect(handleChange).toBeCalled();

    fireEvent.click(getByText('추가'));

    expect(handleClick).toBeCalled();
  });
});
