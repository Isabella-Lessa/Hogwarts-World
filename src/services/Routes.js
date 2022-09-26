import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from '../pages/Characters.jsx';
import Gryffindor from '../pages/Gryffindor.jsx';
import Hufflepuff from '../pages/Hufflepuff.jsx';
import Ravenclaw from '../pages/Ravenclaw.jsx';
import Slytherin from '../pages/Slytherin.jsx';
import ErrorPage from '../services/Error.jsx';

const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Characters />}></Route>
                <Route path='/gryffindor' element={<Gryffindor />}></Route>
                <Route path='/hufflepuff' element={<Hufflepuff />}></Route>
                <Route path='/ravenclaw' element={<Ravenclaw />}></Route>
                <Route path='/slytherin' element={<Slytherin />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    )
    
}

export default Rotas