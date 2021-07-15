import NavBar from './Components/NavBar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/Allusers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForInterview} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
