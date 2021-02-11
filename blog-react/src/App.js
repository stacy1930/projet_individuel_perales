import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/Navbar';
import Home from './component/Home/Home';
import ListArticles from './component/admin/listArticles/listArticles';
import AddArticle from './component/admin/addArticle/addArticle';
import ArticleDetail from './component/articleDetail/articleDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin/listArticles" component={ListArticles} />
          <Route exact path="/admin/addArticle" component={AddArticle} />
          <Route exact path="/admin/addArticle/:id" component={AddArticle} />

          <Route exact path="/articleDetail/:id" component={ArticleDetail} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
