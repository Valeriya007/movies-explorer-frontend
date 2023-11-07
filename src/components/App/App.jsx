import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className="page__content">
      <Routes>
        <Route path="/signin"
          element={<Main name="signin" setLoggedIn={setLoggedIn} />}
        />
        <Route path="/signup"
          element={<Main name="signup" setLoggedIn={setLoggedIn} />}
        />
        <Route path="/" element={
          <>
            <Header name="home" loggedIn={loggedIn} />
            <Main name="home" />
            <Footer />
          </>
        }
        />
        <Route path="/movies" element={
         <>
            <Header />
            <Main name="movies" />
            <Footer />
          </>
        }
        />
        <Route path="/saved-movies" element={
          <>
            <Header />
            <Main name="savedmovies" />
            <Footer />
          </>
        }
        />
        <Route path="/profile" element={
          <>
            <Header />
            <Main name="profile" setLoggedIn={setLoggedIn} />
          </>
        }
        />


        <Route path="*" element={
          <>
            <Main name="error" />
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default App;
