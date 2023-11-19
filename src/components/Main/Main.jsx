import "./Main.css";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';


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
          onLogin={onLogin}
          setIsError={setIsError}
          />,
        signup: <Register
          name={name}
          onRegister={onRegister}

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
