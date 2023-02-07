import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Rental from './pages/Rental';
import ErrorPage from './pages/ErrorPage';

const App = () => {
    return (
      <div className="App">
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route exact path='home' element={<Home />} />
                <Route exact path='about' element={<About />} />
                <Route exact path='rental' element={<Rental />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
      </div>
    );
}

export default App;