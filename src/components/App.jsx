import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import LogIn from 'pages/LogIn';
import Contacts from 'pages/Contacts';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/registration" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
