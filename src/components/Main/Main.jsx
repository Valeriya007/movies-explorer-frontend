import "./Main.css";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Profile from '../Profile/Profile.jsx';
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';


export default function Main({
  name,
  onRegister,
  onLogin,
  setIsError,
  updateUserData,
  isEditProfile,
  setSuccessful,
  setIsEdit,
  isEdit,
  savedMovies,
  addMovie,
  onDelete,
  logOut
}) {
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
        signin: <Login
          name={name}
          onRegister={onRegister}
          setIsError={setIsError}
          />,
        signup: <Register
          name={name}
          onLogin={onLogin}
          setIsError={setIsError}
          />,
        profile: <Profile
          name={name}
          updateUserData={updateUserData}
          setIsError={setIsError}
          isEditProfile={isEditProfile}
          setSuccessful={setSuccessful}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          logOut={logOut}
          />,
        movies:
          <>
            <Movies
              savedMovies={savedMovies}
              addMovie={addMovie}
              setIsError={setIsError} />
          </>,
        savedmovies:
          <>
            <SavedMovies
              savedMovie={savedMovies}
              onDelete={onDelete}
              setIsError={setIsError} />
          </>,
        error: <PageNotFound />
      }[name]}
    </main>
  )
}
