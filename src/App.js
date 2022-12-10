import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import router from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <div className="App">
          <h1 className="text-3xl text-red-700 font-bold underline ">
            tech blog!
          </h1>
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
