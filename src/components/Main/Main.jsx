import "./Main.css";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Profile from '../Profile/Profile.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import PageNotFound from "../PageNotFound/PageNotFound.js";


export default function Main({ name, setLoggedIn }) {
  return (
    <main className="content">
      {{
        home:
          <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </>,
        signin: <Login name={name} setLoggedIn={setLoggedIn} />,
        signup: <Register name={name} setLoggedIn={setLoggedIn} />,
        error: <PageNotFound />,
        profile: <Profile name={name} setLoggedIn={setLoggedIn} />,
        movies:
          <>
            <SearchForm />
            <MoviesCardList />
          </>,
        savedmovies:
          <>
            <SearchForm />
            <MoviesCardList />
          </>
      }[name]}
    </main>
  )
}
