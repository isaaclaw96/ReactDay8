import {Routes,Route} from "react-router-dom";
import Home from "./containers/home";
import Details from "./containers/details";

function App() {
  return (
    <Routes>
      
      <Route path="/ReactDay8/details/:id" exact element={<Details />} />
      <Route path="/ReactDay8" exact element={<Home />} />
    
    </Routes>
  );
}

export default App;
