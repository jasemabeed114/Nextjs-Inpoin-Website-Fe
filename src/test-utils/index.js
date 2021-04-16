import { render } from '@testing-library/react';

const customRender = (ui, options = {}) =>
  render(ui, { ...options });

// re-export everything
export * from '@testing-library/react';
export { default as userEvent }  from '@testing-library/user-event';

export { customRender as render };
