import { Provider } from 'react-redux';
import AppNavigation from './components/AppNavigation';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
