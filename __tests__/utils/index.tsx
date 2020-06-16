import { ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { WrapperProps } from 'types';
import counter from '../../src/store/counter/counterReducer';

function render(
  ui: ReactElement,
  {
    initialState = {},
    reducer = { counter },
    store = createStore(
      combineReducers(reducer),
      initialState
    ),
    ...renderOptions
  }: any
//   renderOptions?: RenderOptions
) {
  function Wrapper({ children }: WrapperProps): ReactElement {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
