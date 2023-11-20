import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import apiMain from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SendContext from '../../contexts/SendContext';
import ErrorContext from '../../contexts/ErrorContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [isCheckToken, setIsCheckToken] = useState(true);
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditProfile, setEditProfile] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  //запрос на загрузку начальных данных
  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        apiMain.getUserData(localStorage.jwt),
        apiMain.getMovies(localStorage.jwt)
      ])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser);
          setSavedMovies(dataMovies.reverse());
          setLoggedIn(true);
          setIsCheckToken(false);
        })
        .catch((error) => {
          console.error(`Ошибка загрузки начальных данных ${error}`)
          setIsCheckToken(false);
          localStorage.clear();
        })
    } else {
      setLoggedIn(false);
      setIsCheckToken(false);
      localStorage.clear();
    }
  }, [loggedIn]);

  //функция регистрации
  function handleRegister(username, email, password) {
    setIsSend(true)
    apiMain.register(username, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false)
          apiMain.login(email, password)
            .then(res => {
              localStorage.setItem('jwt', res.token)
              setLoggedIn(true)
              navigate('/movies')
            })
            .catch((error) => {
              setIsError(true);
              console.error(`Ошибка авторизации после регистрации ${error}`);
            })
            .finally(() => setIsSend(false))
        }
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка регистрации ${err}`);
      })
      .finally(() => setIsSend(false))
  }

 //функция входа
  function handleLogin(email, password) {
    setIsSend(true)
    apiMain.login(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch((err) => {
        setIsError(true)
        console.error(`Ошибка авторизации ${err}`)
      })
      .finally(() => setIsSend(false))
  }

  //функция выхода
  function logOut() {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }


  //обработчик обновления данных пользователя
  function handleUpdateUser(username, email) {
    setIsSend(true)
    apiMain.updateUser(username, email, localStorage.jwt)
      .then(res => {
        setCurrentUser(res);
        setEditProfile(true);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error(`Ошибка редактирования ${error}`)
        setIsError(true)
      })
      .finally(() => setIsSend(false))
  };

  const setSuccessful = useCallback(() => {
    setEditProfile(false)
  }, [])


  //обработчик удаления фильма
  function handleDelete(deleteId) {
    apiMain.deleteMovie(deleteId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteId
          }))
      })
      .catch((error) => console.error(`Ошибка удаления фильма ${error}`));
  }

  //обработчик добавления(лайка) фильма
  function handleLike(data) {
    const isLiked = savedMovies.some((movie) => movie.movieId === data.id);
    const isClicked = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isLiked) {
      handleDelete(isClicked[0]._id)
    } else {
      apiMain.createMovie(data, localStorage.jwt)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((error) => console.error(`Ошибка установки лайка ${error}`));
    }
  }


  return (
    <div className="page__content">
      {isCheckToken ? <Preloader /> :
        <CurrentUserContext.Provider value={currentUser}>
          <SendContext.Provider value={isSend}>
            <ErrorContext.Provider value={isError}>
              <Routes>
                <Route path="/signin"
                  element={loggedIn ? <Navigate to='/movies' replace /> :
                    <Main name="signin"
                      onLogin={handleLogin}
                      setIsError={setIsError} />}
                />
                <Route path="/signup"
                  element={loggedIn ? <Navigate to='/movies' replace /> :
                    <Main name="signup"
                      onRegister={handleRegister}
                      setIsError={setIsError} />}
                />
                <Route path="/"
                  element={
                    <>
                      <Header name="home" loggedIn={loggedIn} />
                      <Main name="home" />
                      <Footer />
                    </>
                  }
                />
                <Route path="/movies"
                  element={<ProtectedRoute
                      component={HomePage}
                      name='movies'
                      loggedIn={loggedIn}
                      savedMovies={savedMovies}
                      addMovie={handleLike}
                      setIsError={setIsError}
                    />}
                />
                <Route path="/saved-movies"
                  element={<ProtectedRoute
                    name="savedmovies"
                    component={HomePage}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onDelete={handleDelete}
                    setIsError={setIsError}
                  />}
                />
                <Route path="/profile"
                  element={<ProtectedRoute
                    name="profile"
                    component={HomePage}
                    loggedIn={loggedIn}
                    logOut={logOut}
                    updateUserData={handleUpdateUser}
                    isEditProfile={isEditProfile}
                    setSuccessful={setSuccessful}
                    setIsError={setIsError}
                    setIsEdit={setIsEdit}
                    isEdit={isEdit}
                  />}
                />
                <Route path="*" element={
                  <>
                    <Main name="error" />
                  </>
                }
                />
              </Routes>
            </ErrorContext.Provider>
          </SendContext.Provider>
        </CurrentUserContext.Provider>
      }
    </div>
  )
}

export default App;
