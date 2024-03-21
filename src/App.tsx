import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Signup from './pages/Signup'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;