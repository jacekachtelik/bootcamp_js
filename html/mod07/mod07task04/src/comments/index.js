import { reducer } from "./reducer";
import { NAME } from "./actionTypes";
import Container from './components/CommentsContainter';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default {reducer, NAME, Contaiter};