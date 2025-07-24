import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import "./fonts/arco-cyrillic.otf"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
