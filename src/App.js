import Main from './route/index'
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter id="app">
      <Main />
    </BrowserRouter>
  );
}

export default App;
