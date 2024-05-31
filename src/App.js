import Header from "./components/Header";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage"
import { Routes,Route } from "react-router-dom";
import Account from "./components/Account"
import MoviesPage from "./components/MoviePage/MoviesPage"
import MovieScreen from "./components/MoviePage/MovieScreen"
import SeriesPage from "./components/SeriesPage/SeriesPage";
import SeriesScreen from "./components/SeriesPage/SeriesScreen";
import ErrorScreen from "./ErrorScreen";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./Footer";
import LandingVideo from "./components/LandingVideo";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <LandingVideo />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="LoginPage" element={<LoginPage />}></Route>
          <Route path="SignUpPage" element={<SignUpPage />}></Route>
          <Route path="Account" element={<ProtectedRoute><Account /></ProtectedRoute>}></Route>
          <Route path="Movies" element={<MoviesPage />}></Route>
          <Route path="Movies/:id" element={<MovieScreen />}></Route>
          <Route path="Series" element={<SeriesPage />}></Route>
          <Route path="Series/:id" element={<SeriesScreen />}></Route>
          <Route path="*" element={<ErrorScreen />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
