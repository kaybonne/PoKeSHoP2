import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Welcome from './pages/Welcome';
import Background from './components/Background';
import './scss/index.scss';
import { Suspense, lazy, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './utils/firebaseConfig';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { clearToasts, setUserStatus } from './app/slices/AppSlice';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader';
import GlobalStyles from './Styles/GlobalStyles';
import AppContainer from './UI/AppContainer';
import StyledApp from './UI/StyledApp';

const Search = lazy(() => import('./pages/Search'));
const MyList = lazy(() => import('./pages/MyList'));
const Compare = lazy(() => import('./pages/Compare'));
const Pokemon = lazy(() => import('./pages/Pokemon'));

export default function App() {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email as string }));
      }
    });
  }, [dispatch]);
  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: 'bottom-right',
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toasts, dispatch]);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Background />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <StyledApp>
              <Navbar />
              <Routes>
                <Route element={<Welcome />} path="/" />
                <Route element={<MyList />} path="/list" />
                <Route element={<Search />} path="/search" />
                <Route element={<Compare />} path="/compare" />
                <Route element={<Pokemon />} path="/pokemon/:id" />
                <Route element={<Navigate to="/pokemon/1" />} path="*" />
              </Routes>
              <Footer />
              <ToastContainer />
            </StyledApp>
          </Suspense>
        </BrowserRouter>
      </AppContainer>
    </>
  );
}
