import { AppRouter } from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
function App() {
  return(
    <Router>
      <div>
        <Header />
        <AppRouter />
      </div>
    </Router>
    
  ) ;
}

export default App;
